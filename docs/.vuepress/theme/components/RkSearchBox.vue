<template>
  <div>
    <!-- <input
      ref="input"
      aria-label="Search"
      :value="query"
      :class="{ 'focused': focused }"
      :placeholder="placeholder"
      :debounce="200"
      autocomplete="off"
      spellcheck="false"
      @input="query = $event.target.value"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    > -->
    <q-input
      ref="qinput"
      class="q-mr-md"
      v-if="!$q.screen.lt.sm || visible"
      v-model="query"
      style="width: 12.5rem; transition: all 0.2 ease"
      :class="{ 'focused': focused }"
      :placeholder="placeholder"
      :debounce="200"
      @focus="focused = true"
      @blur="focused = false; visible=false"
      @keyup.enter="onEnter"
      @keyup.up="onUp"
      @keyup.down="onDown"
      autofocus
      rounded
      outlined
      standout
      dense
      clearable
    >
      <template #prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-btn
      v-if="!visible && $q.screen.lt.sm"
      icon="search"
      flat
      round
      @click="visible=true;"
    />
    <q-card
      v-if="showSuggestions"
      class="q-pa-sm"
      :style="$q.screen.lt.sm ? `right:0; width: 85vw`: null"
      style="position: absolute;  white-space: normal; line-height: normal; width: 20rem"
      @mouseleave="unfocus"
    >
      <q-card-section class="q-pa-none">
        <div
          v-for="(key, i) in Object.keys(suggestions)"
          :key="`${key}-${i}`"
        >
          <div
            class="q-pa-sm bg-light-blue-10 text-white text-weight-medium rounded-borders"
            style="text-transform: capitalize"
          >{{ clean(key) }}</div>
          <q-list>
            <q-item
              class="full-width q-mt-xs"
              :ref="`pk-${s.pk}`"
              v-for="(s, i) in suggestions[key]"
              :key="i"
              :to="s.path"
              dense
              @click="query=''"
              @keydown.enter="$router.push(s.path)"
              :focused="focusIndex === s.pk"
            >
              <q-item-label>{{ s.title || s.path }}</q-item-label>
              <q-item-label
                v-if="s.header"
                caption
              >{{ s.header.title }}</q-item-label>
            </q-item>
          </q-list>
        </div>
      </q-card-section>
    </q-card>
    <!-- <ul
      v-if="showSuggestions"
      class="suggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus"
    >
      <li
        v-for="(key, i) in Object.keys(suggestions)"
        :key="`${key}-${i}`"
      >
        <h6>{{key}}</h6>
        <ul
          class="fit"
          :class="{ 'align-right': alignRight }"
        >
          <li
            v-for="(s, i) in suggestions[key]"
            :key="i"
            class="suggestion"
            :class="{ focused: i === focusIndex }"
            @mousedown="go(i)"
            @mouseenter="focus(i)"
          >
            <a
              :href="s.path"
              @click.prevent
            >
              <span class="page-title">{{ s.title || s.path }}</span>
              <span
                v-if="s.header"
                class="header"
              >&gt; {{ s.header.title }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul> -->
  </div>
</template>

<script>
import get from 'lodash/get'

const matchTest = (query, domain) => {
  const escapeRegExp = str => str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')

  const words = query
    .split(/\s+/g)
    .map(str => str.trim())
    .filter(str => !!str)
  const hasTrailingSpace = query.endsWith(' ')
  const searchRegex = new RegExp(
    words
      .map((word, index) => {
        if (words.length === index + 1 && !hasTrailingSpace) {
          // The last word - ok with the word being "startswith"-like
          return `(?=.*\\b${escapeRegExp(word)})`
        } else {
          // Not the last word - expect the whole word exactly
          return `(?=.*\\b${escapeRegExp(word)}\\b)`
        }
      })
      .join('') + '.+',
    'gi'
  )
  return searchRegex.test(domain)
}

const matchQuery = (query, page, additionalStr = null) => {
  let domain = get(page, 'title', '')

  if (get(page, 'frontmatter.tags')) {
    domain += ` ${page.frontmatter.tags.join(' ')}`
  }

  if (additionalStr) {
    domain += ` ${additionalStr}`
  }

  return matchTest(query, domain)
}

/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS, SEARCH_HOTKEYS */
const SEARCH_MAX_SUGGESTIONS = 5
const SEARCH_PATHS = null
const SEARCH_HOTKEYS = ['s', '/']

export default {
  name: 'SearchBox',

  data () {
    return {
      visible: !this.$q.screen.lt.sm,
      query: '',
      focused: false,
      focusIndex: 0,
      placeholder: undefined,
      counter: 0
    }
  },

  computed: {
    showSuggestions () {
      return (
        this.suggestions
        && Object.keys(this.suggestions).length
      )
    },

    suggestions () {
      if (!this.query) return
      this.counter = 0
      const query = this.query.trim().toLowerCase()
      const matchPage = p => this.$site.themeConfig.test.find(pth => p.path.match(pth))
      const pushPage = (res, p) => {
        const idx = matchPage(p)
        p.pk = this.counter++
        if (!res[idx]) res[idx] = []
        res[idx].push(p)
      }

      const { pages } = this.$site
      // console.log('pages: ', this.$refs)
      const max = this.$site.themeConfig.searchMaxSuggestions || SEARCH_MAX_SUGGESTIONS
      const localePath = this.$localePath
      const res = {}
      for (let i = 0; i < pages.length; i++) {
        const p = pages[i]
        const mp = matchPage(p)
        if (res[mp] && res[mp].length >= max) continue

        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }

        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue
        }

        if (matchQuery(query, p)) {
          pushPage(res, p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res[mp] && res[mp].length >= max) break
            const h = p.headers[j]
            if (h.title && matchQuery(query, p, h.title)) {
              pushPage(res, Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }

      return res
    },

    // make suggestions align right when there are not enough items
    alignRight () {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
    }
  },

  mounted () {
    this.placeholder = this.$site.themeConfig.searchPlaceholder || ''
    document.addEventListener('keydown', this.onHotkey)
  },

  beforeDestroy () {
    document.removeEventListener('keydown', this.onHotkey)
  },

  methods: {
    clean (path) {
      return path.split('/').find(t => t !== "")
    },
    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    isSearchable (page) {
      let searchPaths = this.$site.themeConfig.test || SEARCH_PATHS

      // all paths searchables
      if (searchPaths === null) { return true }

      searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths)

      return searchPaths.filter(path => {
        return page.path.match(path)
      }).length > 0
    },

    onHotkey (event) {
      if (event.srcElement === document.body && SEARCH_HOTKEYS.includes(event.key)) {
        this.$refs.input.focus()
        event.preventDefault()
      }
    },

    onEnter () {
      this.$router.push(this.$refs[`pk-${this.focusIndex}`][0].to)
      this.query = null
      this.focusIndex = 0
      this.$refs.qinput.blur()
    },

    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.counter - 1
        }
      }
    },

    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.counter - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    go (i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
    },

    focus (i) {
      this.focusIndex = i
    },

    unfocus () {
      this.focusIndex = -1
    }
  }
}
</script>

<style lang="stylus">
.search-box {
  display: inline-block;
  position: relative;
  margin-right: 1rem;

  input {
    cursor: text;
    width: 10rem;
    height: 2rem;
    color: lighten($textColor, 25%);
    display: inline-block;
    border: 1px solid darken($borderColor, 10%);
    border-radius: 2rem;
    font-size: 0.9rem;
    line-height: 2rem;
    padding: 0 0.5rem 0 2rem;
    outline: none;
    transition: all 0.2s ease;
    background: #fff url('/assets/search.svg') 0.6rem 0.5rem no-repeat;
    background-size: 1rem;

    &:focus {
      cursor: auto;
      border-color: $accentColor;
    }
  }

  .suggestions {
    background: #fff;
    width: 20rem;
    position: absolute;
    top: 2 rem;
    border: 1px solid darken($borderColor, 10%);
    border-radius: 6px;
    padding: 0.4rem;
    list-style-type: none;

    &.align-right {
      right: 0;
    }
  }

  .suggestion {
    line-height: 1.4;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;

    a {
      white-space: normal;
      color: lighten($textColor, 35%);

      .page-title {
        font-weight: 600;
      }

      .header {
        font-size: 0.9em;
        margin-left: 0.25em;
      }
    }

    &.focused {
      background-color: #f3f4f5;

      a {
        color: $accentColor;
      }
    }
  }
}

@media (max-width: $MQNarrow) {
  .search-box {
    input {
      cursor: pointer;
      width: 0;
      border-color: transparent;
      position: relative;

      &:focus {
        cursor: text;
        left: 0;
        width: 10rem;
      }
    }
  }
}

// Match IE11
@media all and (-ms-high-contrast: none) {
  .search-box input {
    height: 2rem;
  }
}

@media (max-width: $MQNarrow) and (min-width: $MQMobile) {
  .search-box {
    .suggestions {
      left: 0;
    }
  }
}

@media (max-width: $MQMobile) {
  .search-box {
    margin-right: 0;

    input {
      left: 1rem;
    }

    .suggestions {
      right: 0;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .search-box {
    .suggestions {
      width: calc(100vw - 4rem);
    }

    input:focus {
      width: 8rem;
    }
  }
}
</style>
