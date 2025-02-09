"use strict";
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: "Module" },
});
const Us = require("./schema-9f41af7b.cjs");
function ht(e) {
  if (e && e.__esModule) return e;
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const s in e)
      if (s !== "default") {
        const r = Object.getOwnPropertyDescriptor(e, s);
        Object.defineProperty(
          t,
          s,
          r.get ? r : { enumerable: !0, get: () => e[s] }
        );
      }
  }
  return (t.default = e), Object.freeze(t);
}
const zs = "0.14.51",
  ze = (e) => new TextEncoder().encode(e),
  ue = (e) => new TextDecoder().decode(e),
  D = "https://unpkg.com",
  Fe = (e) =>
    /^(skypack|esm|esm\.sh|unpkg|jsdelivr|esm\.run)\:?/.test(e) ||
    /^https?:\/\/(cdn\.skypack\.dev|cdn\.esm\.sh|cdn\.jsdelivr\.net\/npm|unpkg\.com)/.test(
      e
    )
      ? "npm"
      : /^(jsdelivr\.gh|github)\:?/.test(e) ||
        /^https?:\/\/(cdn\.jsdelivr\.net\/gh|raw\.githubusercontent\.com)/.test(
          e
        )
      ? "github"
      : /^(deno)\:?/.test(e) || /^https?:\/\/(deno\.land\/x)/.test(e)
      ? "deno"
      : "other",
  Et = (e, t = D) => (
    /^skypack\:/.test(e)
      ? (t = "https://cdn.skypack.dev")
      : /^(esm\.sh|esm)\:/.test(e)
      ? (t = "https://cdn.esm.sh")
      : /^unpkg\:/.test(e)
      ? (t = "https://unpkg.com")
      : /^(jsdelivr|esm\.run)\:/.test(e)
      ? (t = "https://cdn.jsdelivr.net/npm")
      : /^(jsdelivr\.gh)\:/.test(e)
      ? (t = "https://cdn.jsdelivr.net/gh")
      : /^(deno)\:/.test(e)
      ? (t = "https://deno.land/x")
      : /^(github)\:/.test(e) && (t = "https://raw.githubusercontent.com"),
    /\/$/.test(t) ? t : `${t}/`
  ),
  $t = (e) =>
    e
      .replace(
        /^(skypack|esm|esm\.sh|unpkg|jsdelivr|jsdelivr\.gh|esm\.run|deno|github)\:/,
        ""
      )
      .replace(
        /^https?:\/\/(cdn\.skypack\.dev|cdn\.esm\.sh|cdn\.jsdelivr\.net\/npm|unpkg\.com|cdn\.jsdelivr\.net\/gh|raw\.githubusercontent\.com|deno\.land\/x)/,
        ""
      )
      .replace(/^\//, ""),
  T = (e, t = D) => {
    let s = Et(e, t),
      r = $t(e),
      n = new URL(r, s);
    return { import: e, path: r, origin: s, cdn: t, url: n };
  },
  F = "external-globals",
  wt = ze("export default {}"),
  yt = {
    console: "console-browserify",
    constants: "constants-browserify",
    crypto: "crypto-browserify",
    http: "http-browserify",
    buffer: "buffer",
    Dirent: "dirent",
    vm: "vm-browserify",
    zlib: "zlib-browserify",
    assert: "assert",
    child_process: "child_process",
    cluster: "child_process",
    dgram: "dgram",
    dns: "dns",
    domain: "domain-browser",
    events: "events",
    https: "https",
    module: "module",
    net: "net",
    path: "path-browserify",
    punycode: "punycode",
    querystring: "querystring",
    readline: "readline",
    repl: "repl",
    stream: "stream",
    string_decoder: "string_decoder",
    sys: "sys",
    timers: "timers",
    tls: "tls",
    tty: "tty-browserify",
    url: "url",
    util: "util",
    _shims: "_shims",
    _stream_duplex: "_stream_duplex",
    _stream_readable: "_stream_readable",
    _stream_writable: "_stream_writable",
    _stream_transform: "_stream_transform",
    _stream_passthrough: "_stream_passthrough",
    process: "process/browser",
    fs: "memfs",
    os: "os-browserify/browser",
    v8: "v8",
    "node-inspect": "node-inspect",
    _linklist: "_linklist",
    _stream_wrap: "_stream_wrap",
  },
  At = Object.keys(yt),
  St = [
    "v8/tools/codemap",
    "v8/tools/consarray",
    "v8/tools/csvparser",
    "v8/tools/logreader",
    "v8/tools/profile_view",
    "v8/tools/profile",
    "v8/tools/SourceMap",
    "v8/tools/splaytree",
    "v8/tools/tickprocessor-driver",
    "v8/tools/tickprocessor",
    "node-inspect/lib/_inspect",
    "node-inspect/lib/internal/inspect_client ",
    "node-inspect/lib/internal/inspect_repl",
    "_linklist",
    "_stream_wrap",
  ],
  Rt = [
    "chokidar",
    "yargs",
    "fsevents",
    "worker_threads",
    "async_hooks",
    "diagnostics_channel",
    "http2",
    "inspector",
    "perf_hooks",
    "trace_events",
    "wasi",
    ...St,
    ...At,
  ],
  vt = (e, t = []) =>
    [...Rt, ...t].find((s) => !!(s === e || e.startsWith(`${s}/`))),
  bt = (e, t, s) => {
    const { external: r = [] } = s?.esbuild ?? {};
    return {
      name: F,
      setup(n) {
        n.onResolve({ filter: /.*/ }, (i) => {
          let l = i.path.replace(/^node\:/, ""),
            { path: o } = T(l);
          if (vt(o, r)) return { path: o, namespace: F, external: !0 };
        }),
          n.onLoad({ filter: /.*/, namespace: F }, (i) => ({
            pluginName: F,
            contents: wt,
            warnings: [
              {
                text: `${i.path} is marked as an external module and will be ignored.`,
                details: `"${i.path}" is a built-in node module thus can't be bundled by https://bundlejs.com, sorry about that.`,
              },
            ],
          }));
      },
    };
  },
  Be = new Map(),
  Tt = "EXTERNAL_FETCHES",
  _e = async (e, t, s) => {
    let r = await fetch(t, s),
      n = r.clone();
    return "caches" in globalThis ? e.put(t, n) : Be.set(t, n), r;
  };
exports.OPEN_CACHE = void 0;
const _t = async () =>
    exports.OPEN_CACHE
      ? exports.OPEN_CACHE
      : (exports.OPEN_CACHE = await caches.open(Tt)),
  J = async (e, t = !1, s) => {
    let r = new Request(e.toString()),
      n,
      i,
      l;
    return (
      "caches" in globalThis
        ? ((i = await _t()), (l = await i.match(r)))
        : (l = Be.get(r)),
      (n = l),
      l ? t || _e(i, r, s) : (n = await _e(i, r, s)),
      n.clone()
    );
  },
  Y = 46,
  w = 47,
  Ot = "/",
  Pt = /\/+/;
function k(e) {
  if (typeof e != "string")
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`);
}
function Nt(e) {
  return e === w;
}
function kt(e, t, s, r) {
  let n = "",
    i = 0,
    l = -1,
    o = 0,
    a;
  for (let c = 0, h = e.length; c <= h; ++c) {
    if (c < h) a = e.charCodeAt(c);
    else {
      if (r(a)) break;
      a = w;
    }
    if (r(a)) {
      if (!(l === c - 1 || o === 1))
        if (l !== c - 1 && o === 2) {
          if (
            n.length < 2 ||
            i !== 2 ||
            n.charCodeAt(n.length - 1) !== Y ||
            n.charCodeAt(n.length - 2) !== Y
          ) {
            if (n.length > 2) {
              const f = n.lastIndexOf(s);
              f === -1
                ? ((n = ""), (i = 0))
                : ((n = n.slice(0, f)), (i = n.length - 1 - n.lastIndexOf(s))),
                (l = c),
                (o = 0);
              continue;
            } else if (n.length === 2 || n.length === 1) {
              (n = ""), (i = 0), (l = c), (o = 0);
              continue;
            }
          }
          t && (n.length > 0 ? (n += `${s}..`) : (n = ".."), (i = 2));
        } else
          n.length > 0 ? (n += s + e.slice(l + 1, c)) : (n = e.slice(l + 1, c)),
            (i = c - l - 1);
      (l = c), (o = 0);
    } else a === Y && o !== -1 ? ++o : (o = -1);
  }
  return n;
}
function Fs(e, t) {
  const s = t.dir || t.root,
    r = t.base || (t.name || "") + (t.ext || "");
  return s ? (s === t.root ? s + r : s + e + r) : r;
}
const Bs = {
  "	": "%09",
  "\n": "%0A",
  "\v": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  " ": "%20",
};
function Ct(e) {
  return e.replaceAll(/[\s]/g, (t) => Bs[t] ?? t);
}
const Gs = "/",
  qs = ":";
function Oe(...e) {
  let t = "",
    s = !1;
  for (let r = e.length - 1; r >= -1 && !s; r--) {
    let n;
    if (r >= 0) n = e[r];
    else {
      const { Deno: i } = globalThis;
      if (typeof i?.cwd != "function")
        throw new TypeError("Resolved a relative path without a CWD.");
      n = i?.cwd?.() ?? "/";
    }
    k(n), n.length !== 0 && ((t = `${n}/${t}`), (s = n.charCodeAt(0) === w));
  }
  return (
    (t = kt(t, !s, "/", Nt)),
    s ? (t.length > 0 ? `/${t}` : "/") : t.length > 0 ? t : "."
  );
}
function It(e) {
  if ((k(e), e.length === 0)) return ".";
  const t = e.charCodeAt(0) === w,
    s = e.charCodeAt(e.length - 1) === w;
  return (
    (e = kt(e, !t, "/", Nt)),
    e.length === 0 && !t && (e = "."),
    e.length > 0 && s && (e += "/"),
    t ? `/${e}` : e
  );
}
function Lt(e) {
  return k(e), e.length > 0 && e.charCodeAt(0) === w;
}
function Hs(...e) {
  if (e.length === 0) return ".";
  let t;
  for (let s = 0, r = e.length; s < r; ++s) {
    const n = e[s];
    k(n), n.length > 0 && (t ? (t += `/${n}`) : (t = n));
  }
  return t ? It(t) : ".";
}
function Xs(e, t) {
  if ((k(e), k(t), e === t || ((e = Oe(e)), (t = Oe(t)), e === t))) return "";
  let s = 1;
  const r = e.length;
  for (; s < r && e.charCodeAt(s) === w; ++s);
  const n = r - s;
  let i = 1;
  const l = t.length;
  for (; i < l && t.charCodeAt(i) === w; ++i);
  const o = l - i,
    a = n < o ? n : o;
  let c = -1,
    h = 0;
  for (; h <= a; ++h) {
    if (h === a) {
      if (o > a) {
        if (t.charCodeAt(i + h) === w) return t.slice(i + h + 1);
        if (h === 0) return t.slice(i + h);
      } else
        n > a && (e.charCodeAt(s + h) === w ? (c = h) : h === 0 && (c = 0));
      break;
    }
    const g = e.charCodeAt(s + h),
      E = t.charCodeAt(i + h);
    if (g !== E) break;
    g === w && (c = h);
  }
  let f = "";
  for (h = s + c + 1; h <= r; ++h)
    (h === r || e.charCodeAt(h) === w) &&
      (f.length === 0 ? (f += "..") : (f += "/.."));
  return f.length > 0
    ? f + t.slice(i + c)
    : ((i += c), t.charCodeAt(i) === w && ++i, t.slice(i));
}
function Ws(e) {
  return e;
}
function Vs(e) {
  if ((k(e), e.length === 0)) return ".";
  const t = e.charCodeAt(0) === w;
  let s = -1,
    r = !0;
  for (let n = e.length - 1; n >= 1; --n)
    if (e.charCodeAt(n) === w) {
      if (!r) {
        s = n;
        break;
      }
    } else r = !1;
  return s === -1 ? (t ? "/" : ".") : t && s === 1 ? "//" : e.slice(0, s);
}
function Ys(e, t = "") {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  k(e);
  let s = 0,
    r = -1,
    n = !0,
    i;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t.length === e.length && t === e) return "";
    let l = t.length - 1,
      o = -1;
    for (i = e.length - 1; i >= 0; --i) {
      const a = e.charCodeAt(i);
      if (a === w) {
        if (!n) {
          s = i + 1;
          break;
        }
      } else
        o === -1 && ((n = !1), (o = i + 1)),
          l >= 0 &&
            (a === t.charCodeAt(l)
              ? --l === -1 && (r = i)
              : ((l = -1), (r = o)));
    }
    return s === r ? (r = o) : r === -1 && (r = e.length), e.slice(s, r);
  } else {
    for (i = e.length - 1; i >= 0; --i)
      if (e.charCodeAt(i) === w) {
        if (!n) {
          s = i + 1;
          break;
        }
      } else r === -1 && ((n = !1), (r = i + 1));
    return r === -1 ? "" : e.slice(s, r);
  }
}
function Zs(e) {
  k(e);
  let t = -1,
    s = 0,
    r = -1,
    n = !0,
    i = 0;
  for (let l = e.length - 1; l >= 0; --l) {
    const o = e.charCodeAt(l);
    if (o === w) {
      if (!n) {
        s = l + 1;
        break;
      }
      continue;
    }
    r === -1 && ((n = !1), (r = l + 1)),
      o === Y
        ? t === -1
          ? (t = l)
          : i !== 1 && (i = 1)
        : t !== -1 && (i = -1);
  }
  return t === -1 ||
    r === -1 ||
    i === 0 ||
    (i === 1 && t === r - 1 && t === s + 1)
    ? ""
    : e.slice(t, r);
}
function Ks(e) {
  if (e === null || typeof e != "object")
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof e}`
    );
  return Fs("/", e);
}
function Js(e) {
  k(e);
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const s = e.charCodeAt(0) === w;
  let r;
  s ? ((t.root = "/"), (r = 1)) : (r = 0);
  let n = -1,
    i = 0,
    l = -1,
    o = !0,
    a = e.length - 1,
    c = 0;
  for (; a >= r; --a) {
    const h = e.charCodeAt(a);
    if (h === w) {
      if (!o) {
        i = a + 1;
        break;
      }
      continue;
    }
    l === -1 && ((o = !1), (l = a + 1)),
      h === Y
        ? n === -1
          ? (n = a)
          : c !== 1 && (c = 1)
        : n !== -1 && (c = -1);
  }
  return (
    n === -1 || l === -1 || c === 0 || (c === 1 && n === l - 1 && n === i + 1)
      ? l !== -1 &&
        (i === 0 && s
          ? (t.base = t.name = e.slice(1, l))
          : (t.base = t.name = e.slice(i, l)))
      : (i === 0 && s
          ? ((t.name = e.slice(1, n)), (t.base = e.slice(1, l)))
          : ((t.name = e.slice(i, n)), (t.base = e.slice(i, l))),
        (t.ext = e.slice(n, l))),
    i > 0 ? (t.dir = e.slice(0, i - 1)) : s && (t.dir = "/"),
    t
  );
}
function Qs(e) {
  if (((e = e instanceof URL ? e : new URL(e)), e.protocol != "file:"))
    throw new TypeError("Must be a file URL.");
  return decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function er(e) {
  if (!Lt(e)) throw new TypeError("Must be an absolute path.");
  const t = new URL("file:///");
  return (t.pathname = Ct(e.replace(/%/g, "%25").replace(/\\/g, "%5C"))), t;
}
const Ge = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        sep: Gs,
        delimiter: qs,
        resolve: Oe,
        normalize: It,
        isAbsolute: Lt,
        join: Hs,
        relative: Xs,
        toNamespacedPath: Ws,
        dirname: Vs,
        basename: Ys,
        extname: Zs,
        format: Ks,
        parse: Js,
        fromFileUrl: Qs,
        toFileUrl: er,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tr = Ge,
  { join: sr, normalize: pt } = tr,
  ye = ["!", "$", "(", ")", "*", "+", ".", "=", "?", "[", "\\", "^", "{", "|"],
  rr = ["-", "\\", "]"];
function nr(
  e,
  {
    extended: t = !0,
    globstar: s = !0,
    os: r = "linux",
    caseInsensitive: n = !1,
  } = {}
) {
  if (e == "") return /(?!)/;
  const i = r == "windows" ? "(?:\\\\|/)+" : "/+",
    l = r == "windows" ? "(?:\\\\|/)*" : "/*",
    o = r == "windows" ? ["\\", "/"] : ["/"],
    a = r == "windows" ? "(?:[^\\\\/]*(?:\\\\|/|$)+)*" : "(?:[^/]*(?:/|$)+)*",
    c = r == "windows" ? "[^\\\\/]*" : "[^/]*",
    h = r == "windows" ? "`" : "\\";
  let f = e.length;
  for (; f > 1 && o.includes(e[f - 1]); f--);
  e = e.slice(0, f);
  let g = "";
  for (let E = 0; E < e.length; ) {
    let p = "";
    const d = [];
    let u = !1,
      M = !1,
      I = !1,
      m = E;
    for (; m < e.length && !o.includes(e[m]); m++) {
      if (M) {
        (M = !1), (p += (u ? rr : ye).includes(e[m]) ? `\\${e[m]}` : e[m]);
        continue;
      }
      if (e[m] == h) {
        M = !0;
        continue;
      }
      if (e[m] == "[")
        if (u) {
          if (e[m + 1] == ":") {
            let A = m + 1,
              S = "";
            for (; e[A + 1] != null && e[A + 1] != ":"; ) (S += e[A + 1]), A++;
            if (e[A + 1] == ":" && e[A + 2] == "]") {
              (m = A + 2),
                S == "alnum"
                  ? (p += "\\dA-Za-z")
                  : S == "alpha"
                  ? (p += "A-Za-z")
                  : S == "ascii"
                  ? (p += "\0-\x7F")
                  : S == "blank"
                  ? (p += "	 ")
                  : S == "cntrl"
                  ? (p += "\0-\x7F")
                  : S == "digit"
                  ? (p += "\\d")
                  : S == "graph"
                  ? (p += "!-~")
                  : S == "lower"
                  ? (p += "a-z")
                  : S == "print"
                  ? (p += " -~")
                  : S == "punct"
                  ? (p += `!"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_\u2018{|}~`)
                  : S == "space"
                  ? (p += "\\s\v")
                  : S == "upper"
                  ? (p += "A-Z")
                  : S == "word"
                  ? (p += "\\w")
                  : S == "xdigit" && (p += "\\dA-Fa-f");
              continue;
            }
          }
        } else {
          (u = !0),
            (p += "["),
            e[m + 1] == "!"
              ? (m++, (p += "^"))
              : e[m + 1] == "^" && (m++, (p += "\\^"));
          continue;
        }
      if (e[m] == "]" && u) {
        (u = !1), (p += "]");
        continue;
      }
      if (u) {
        e[m] == "\\" ? (p += "\\\\") : (p += e[m]);
        continue;
      }
      if (e[m] == ")" && d.length > 0 && d[d.length - 1] != "BRACE") {
        p += ")";
        const A = d.pop();
        A == "!" ? (p += c) : A != "@" && (p += A);
        continue;
      }
      if (e[m] == "|" && d.length > 0 && d[d.length - 1] != "BRACE") {
        p += "|";
        continue;
      }
      if (e[m] == "+" && t && e[m + 1] == "(") {
        m++, d.push("+"), (p += "(?:");
        continue;
      }
      if (e[m] == "@" && t && e[m + 1] == "(") {
        m++, d.push("@"), (p += "(?:");
        continue;
      }
      if (e[m] == "?") {
        t && e[m + 1] == "(" ? (m++, d.push("?"), (p += "(?:")) : (p += ".");
        continue;
      }
      if (e[m] == "!" && t && e[m + 1] == "(") {
        m++, d.push("!"), (p += "(?!");
        continue;
      }
      if (e[m] == "{") {
        d.push("BRACE"), (p += "(?:");
        continue;
      }
      if (e[m] == "}" && d[d.length - 1] == "BRACE") {
        d.pop(), (p += ")");
        continue;
      }
      if (e[m] == "," && d[d.length - 1] == "BRACE") {
        p += "|";
        continue;
      }
      if (e[m] == "*") {
        if (t && e[m + 1] == "(") m++, d.push("*"), (p += "(?:");
        else {
          const A = e[m - 1];
          let S = 1;
          for (; e[m + 1] == "*"; ) m++, S++;
          const Ms = e[m + 1];
          s &&
          S == 2 &&
          [...o, void 0].includes(A) &&
          [...o, void 0].includes(Ms)
            ? ((p += a), (I = !0))
            : (p += c);
        }
        continue;
      }
      p += ye.includes(e[m]) ? `\\${e[m]}` : e[m];
    }
    if (d.length > 0 || u || M) {
      p = "";
      for (const A of e.slice(E, m))
        (p += ye.includes(A) ? `\\${A}` : A), (I = !1);
    }
    for (
      g += p, I || ((g += m < e.length ? i : l), (I = !0));
      o.includes(e[m]);

    )
      m++;
    if (!(m > E))
      throw new Error("Assertion failure: i > j (potential infinite loop)");
    E = m;
  }
  return (g = `^${g}$`), new RegExp(g, n ? "i" : "");
}
function ir(e) {
  const t = { "{": "}", "(": ")", "[": "]" },
    s =
      /\\(.)|(^!|\*|\?|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
  if (e === "") return !1;
  let r;
  for (; (r = s.exec(e)); ) {
    if (r[2]) return !0;
    let n = r.index + r[0].length;
    const i = r[1],
      l = i ? t[i] : null;
    if (i && l) {
      const o = e.indexOf(l, n);
      o !== -1 && (n = o + 1);
    }
    e = e.slice(n);
  }
  return !1;
}
function xt(e, { globstar: t = !1 } = {}) {
  if (e.match(/\0/g))
    throw new Error(`Glob contains invalid characters: "${e}"`);
  if (!t) return pt(e);
  const s = Pt.source,
    r = new RegExp(`(?<=(${s}|^)\\*\\*${s})\\.\\.(?=${s}|$)`, "g");
  return pt(e.replace(r, "\0")).replace(/\0/g, "..");
}
function lr(e, { extended: t = !0, globstar: s = !1 } = {}) {
  if (!s || e.length == 0) return sr(...e);
  if (e.length === 0) return ".";
  let r;
  for (const n of e) {
    const i = n;
    i.length > 0 && (r ? (r += `${Ot}${i}`) : (r = i));
  }
  return r ? xt(r, { extended: t, globstar: s }) : ".";
}
const or = Ge,
  ar = Ge,
  {
    basename: cr,
    delimiter: ur,
    dirname: qe,
    extname: He,
    format: fr,
    fromFileUrl: hr,
    isAbsolute: Dt,
    join: jt,
    normalize: pr,
    parse: dr,
    relative: gr,
    resolve: Xe,
    sep: mr,
    toFileUrl: Er,
    toNamespacedPath: $r,
  } = or,
  fe = (e, ...t) => {
    const s = new URL(e);
    return (
      (s.pathname = Ct(
        jt(s.pathname, ...t)
          .replace(/%/g, "%25")
          .replace(/\\/g, "%5C")
      )),
      s.toString()
    );
  },
  de = (e) => /^(?!\.).*/.test(e) && !Dt(e),
  wr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        urlJoin: fe,
        isBareImport: de,
        SEP: Ot,
        SEP_PATTERN: Pt,
        globToRegExp: nr,
        isGlob: ir,
        normalizeGlob: xt,
        joinGlobs: lr,
        posix: ar,
        basename: cr,
        delimiter: ur,
        dirname: qe,
        extname: He,
        format: fr,
        fromFileUrl: hr,
        isAbsolute: Dt,
        join: jt,
        normalize: pr,
        parse: dr,
        relative: gr,
        resolve: Xe,
        sep: mr,
        toFileUrl: Er,
        toNamespacedPath: $r,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Mt = [".tsx", ".ts", ".jsx", ".js", ".css", ".json"],
  We = (e) => {
    const t = He(e);
    return Mt.includes(t)
      ? (/\.js(x)?$/.test(t) ? t.replace(/^\.js/, ".ts") : t).slice(1)
      : t === ".mjs" || t === ".cjs" || t === ".mts" || t === ".cts"
      ? "ts"
      : t == ".scss"
      ? "css"
      : t == ".png" || t == ".jpeg" || t == ".ttf"
      ? "dataurl"
      : t == ".svg" || t == ".html" || t == ".txt"
      ? "text"
      : t == ".wasm"
      ? "file"
      : t.length
      ? "text"
      : "ts";
  };
function P(e, t) {
  if (typeof e == "string") return e;
  if (e) {
    let s, r;
    if (Array.isArray(e)) {
      for (s = 0; s < e.length; s++) if ((r = P(e[s], t))) return r;
    } else for (s in e) if (t.has(s)) return P(e[s], t);
  }
}
function b(e, t, s) {
  throw new Error(
    s
      ? `No known conditions for "${t}" entry in "${e}" package`
      : `Missing "${t}" export in "${e}" package`
  );
}
function ge(e, t) {
  return t === e
    ? "."
    : t[0] === "."
    ? t
    : t.replace(new RegExp("^" + e + "/"), "./");
}
function Ut(e, t = ".", s = {}) {
  let { name: r, exports: n } = e;
  if (n) {
    let { browser: i, require: l, unsafe: o, conditions: a = [] } = s,
      c = ge(r, t);
    if ((c[0] !== "." && (c = "./" + c), typeof n == "string"))
      return c === "." ? n : b(r, c);
    let h = new Set(["default", ...a]);
    o || h.add(l ? "require" : "import"), o || h.add(i ? "browser" : "node");
    let f,
      g,
      E = !1;
    for (f in n) {
      E = f[0] !== ".";
      break;
    }
    if (E) return c === "." ? P(n, h) || b(r, c, 1) : b(r, c);
    if ((g = n[c])) return P(g, h) || b(r, c, 1);
    for (f in n) {
      if (((g = f[f.length - 1]), g === "/" && c.startsWith(f)))
        return (g = P(n[f], h)) ? g + c.substring(f.length) : b(r, c, 1);
      if (
        g === "*" &&
        c.startsWith(f.slice(0, -1)) &&
        c.substring(f.length - 1).length > 0
      )
        return (g = P(n[f], h))
          ? g.replace("*", c.substring(f.length - 1))
          : b(r, c, 1);
    }
    return b(r, c);
  }
}
function zt(e, t = {}) {
  let s = 0,
    r,
    n = t.browser,
    i = t.fields || ["module", "main"];
  for (n && !i.includes("browser") && i.unshift("browser"); s < i.length; s++)
    if ((r = e[i[s]])) {
      if (typeof r != "string")
        if (typeof r == "object" && i[s] == "browser") {
          if (typeof n == "string" && ((r = r[(n = ge(e.name, n))]), r == null))
            return n;
        } else continue;
      return typeof r == "string" ? "./" + r.replace(/^\.?\//, "") : r;
    }
}
const Ft = /^(@[^\/]+\/[^@\/]+)(?:@([^\/]+))?(\/.*)?$/,
  Bt = /^([^@\/]+)(?:@([^\/]+))?(\/.*)?$/;
function Q(e) {
  const t = Ft.exec(e) || Bt.exec(e);
  if (!t) throw new Error(`[parse-package-name] invalid package name: ${e}`);
  return { name: t[1] || "", version: t[2] || "latest", path: t[3] || "" };
}
function Gt(e, t = ".", s = {}) {
  let { name: r, imports: n } = e;
  if (n) {
    let { browser: i, require: l, unsafe: o, conditions: a = [] } = s,
      c = ge(r, t);
    if (typeof n == "string") return c === "#" ? n : b(r, c);
    let h = new Set(["default", ...a]);
    o || h.add(l ? "require" : "import"), o || h.add(i ? "browser" : "node");
    let f,
      g,
      E = !1;
    for (f in n) {
      E = f[0] !== "#";
      break;
    }
    if (E) return c === "#" ? P(n, h) || b(r, c, 1) : b(r, c);
    if ((g = n[c])) return P(g, h) || b(r, c, 1);
    for (f in n) {
      if (((g = f[f.length - 1]), g === "/" && c.startsWith(f)))
        return (g = P(n[f], h)) ? g + c.substring(f.length) : b(r, c, 1);
      if (
        g === "*" &&
        c.startsWith(f.slice(0, -1)) &&
        c.substring(f.length - 1).length > 0
      )
        return (g = P(n[f], h))
          ? g.replace("*", c.substring(f.length - 1))
          : b(r, c, 1);
    }
    return b(r, c);
  }
}
const Pe = "cdn-url",
  he =
    (e = D, t) =>
    async (s) => {
      if (de(s.path)) {
        let { path: r, origin: n } = T(s.path, e),
          i = Fe(n) == "npm",
          l = Q(r),
          o = l.path,
          a = s.pluginData?.pkg ?? {};
        if (r[0] == "#") {
          let g = Gt({ ...a, exports: a.imports }, r, {
            require: s.kind === "require-call" || s.kind === "require-resolve",
          });
          if (typeof g == "string") {
            (o = g.replace(/^\.?\/?/, "/")), o && o[0] !== "/" && (o = `/${o}`);
            let E = i ? "@" + a.version : "",
              {
                url: { href: p },
              } = T(`${a.name}${E}${o}`);
            return { namespace: N, path: p, pluginData: { pkg: a } };
          }
        }
        if (
          ("dependencies" in a ||
            "devDependencies" in a ||
            "peerDependencies" in a) &&
          !/\S+@\S+/.test(r)
        ) {
          let {
              devDependencies: g = {},
              dependencies: E = {},
              peerDependencies: p = {},
            } = a,
            d = Object.assign({}, g, p, E);
          Object.keys(d).includes(r) && (l.version = d[r]);
        }
        if (i)
          try {
            let { url: g } = T(`${l.name}@${l.version}/package.json`, n);
            a = await J(g, !0).then((p) => p.json());
            let E =
              Ut(a, o ? "." + o.replace(/^\.?\/?/, "/") : ".", {
                require:
                  s.kind === "require-call" || s.kind === "require-resolve",
              }) || zt(a);
            typeof E == "string" &&
              (o = E.replace(/^\.?\/?/, "/").replace(/\.js\.js$/, ".js")),
              o && o[0] !== "/" && (o = `/${o}`);
          } catch (g) {
            t.emit(
              "logger.warn",
              `You may want to change CDNs. The current CDN ${
                /unpkg\.com/.test(n)
                  ? `path "${n}${r}" may not`
                  : `"${n}" doesn't`
              } support package.json files.
There is a chance the CDN you're using doesn't support looking through the package.json of packages. bundlejs will switch to inaccurate guesses for package versions. For package.json support you may wish to use https://unpkg.com or other CDN's that support package.json.`
            ).emit("logger.warn", g);
          }
        let h = i ? "@" + l.version : "",
          { url: f } = T(`${l.name}${h}${o}`, n);
        return { namespace: N, path: f.toString(), pluginData: { pkg: a } };
      }
    },
  qt = (e, t, s) => {
    let { origin: r } = /:/.test(s?.cdn) ? T(s?.cdn) : T(s?.cdn + ":");
    return (
      s.filesystem,
      {
        name: Pe,
        setup(n) {
          n.onResolve({ filter: /.*/ }, he(r, e)),
            n.onResolve({ filter: /.*/, namespace: Pe }, he(r, e));
        },
      }
    );
  },
  N = "http-url",
  Ve = async (e, t) => {
    try {
      let s = await J(e);
      if (!s.ok) throw new Error(`Couldn't load ${s.url} (${s.status} code)`);
      return (
        t.emit("logger.info", `Fetch ${e}`),
        { url: s.url, content: new Uint8Array(await s.arrayBuffer()) }
      );
    } catch (s) {
      throw new Error(`[getRequest] Failed at request (${e})
${s.toString()}`);
    }
  },
  Ht = async (e, t, s, r, n) => {
    const i = /new URL\(['"`](.*)['"`],(?:\s+)?import\.meta\.url(?:\s+)?\)/g,
      l = new URL("./", e).toString(),
      o = n.filesystem,
      a = ue(t),
      h = Array.from(a.matchAll(i)).map(async ([, f]) => {
        let { content: g, url: E } = await Ve(fe(l, f), r);
        return (
          o.set(s + ":" + E, t),
          {
            path: f,
            contents: g,
            get text() {
              return ue(g);
            },
          }
        );
      });
    return await Promise.allSettled(h);
  },
  Ye =
    (e = D, t) =>
    async (s) => {
      let r = s.path.replace(/\/$/, "/index");
      if (!r.startsWith(".")) {
        if (/^https?:\/\//.test(r))
          return {
            path: r,
            namespace: N,
            pluginData: { pkg: s.pluginData?.pkg },
          };
        let i = new URL(fe(s.pluginData?.url ? s.pluginData?.url : e, "../", r))
            .origin,
          o = Fe(i) == "npm" ? i : e;
        return de(r)
          ? he(o, t)(s)
          : {
              path: T(r, o).url.toString(),
              namespace: N,
              pluginData: { pkg: s.pluginData?.pkg },
            };
      }
      return {
        path: fe(s.pluginData?.url, "../", r),
        namespace: N,
        pluginData: { pkg: s.pluginData?.pkg },
      };
    },
  Xt = (e, t, s) => {
    let { origin: r } = /:/.test(s?.cdn) ? T(s?.cdn) : T(s?.cdn + ":");
    const n = s.filesystem,
      i = t.assets ?? [];
    return {
      name: N,
      setup(l) {
        l.onResolve({ filter: /^https?:\/\// }, (o) => ({
          path: o.path,
          namespace: N,
        })),
          l.onResolve({ filter: /.*/, namespace: N }, Ye(r, e)),
          l.onLoad({ filter: /.*/, namespace: N }, async (o) => {
            let a = He(o.path),
              c = (u = "") => (a.length > 0 ? o.path : o.path + u),
              h,
              f;
            const g =
                a.length > 0
                  ? [""]
                  : ["", ".ts", ".tsx", ".js", ".mjs", ".cjs"],
              E = g.length;
            let p;
            for (let u = 0; u < E; u++) {
              const M = g[u];
              try {
                ({ content: h, url: f } = await Ve(c(M), e));
                break;
              } catch (I) {
                if ((u == 0 && (p = I), u >= E - 1))
                  throw (e.emit("logger.error", I.toString()), p);
              }
            }
            await n.set(o.namespace + ":" + o.path, h);
            let d = (await Ht(f, h, o.namespace, e, s))
              .filter((u) =>
                u.status == "rejected"
                  ? (e.emit(
                      "logger:warn",
                      `Asset fetch failed.
` + u?.reason?.toString()
                    ),
                    !1)
                  : !0
              )
              .map((u) => {
                if (u.status == "fulfilled") return u.value;
              });
            // console.log("esbuild.plugins", c());
            return (
              (t.assets = i.concat(d)),
              {
                contents: h,
                loader: We(f),
                pluginData: { url: f, pkg: o.pluginData?.pkg },
              }
            );
          });
      },
    };
  },
  Ne = "alias-globals",
  Ze = (e, t = {}) => {
    if (!de(e)) return !1;
    let s = Object.keys(t),
      r = e.replace(/^node\:/, ""),
      n = Q(r);
    return s.find((i) => n.name === i);
  },
  ie =
    (e = {}, t = D, s) =>
    async (r) => {
      let n = r.path.replace(/^node\:/, ""),
        { path: i } = T(n);
      if (Ze(i, e)) {
        let l = Q(i),
          o = e[l.name];
        return Ye(t, s)({ ...r, path: o });
      }
    },
  Wt = (e, t, s) => {
    let { origin: r } = /:/.test(s?.cdn) ? T(s?.cdn) : T(s?.cdn + ":"),
      n = s.alias ?? {};
    return {
      name: Ne,
      setup(i) {
        i.onResolve({ filter: /^node\:.*/ }, (l) =>
          Ze(l.path, n)
            ? ie(n, r, e)(l)
            : { path: l.path, namespace: F, external: !0 }
        ),
          i.onResolve({ filter: /.*/ }, ie(n, r, e)),
          i.onResolve({ filter: /.*/, namespace: Ne }, ie(n, r, e));
      },
    };
  },
  le = "virtual-filesystem",
  Vt = (e, t, s) => {
    const r = s.filesystem;
    return {
      name: le,
      setup(n) {
        n.onResolve({ filter: /.*/ }, (i) => ({
          path: i.path,
          pluginData: i.pluginData ?? {},
          namespace: le,
        })),
          n.onLoad({ filter: /.*/, namespace: le }, async (i) => {
            let l = await r.resolve(i.path, i?.pluginData?.importer);
            return {
              contents: await r.get(i.path, "buffer", i?.pluginData?.importer),
              pluginData: { importer: l },
              loader: We(l),
            };
          });
      },
    };
  },
  Yt =
    "Deno" in globalThis
      ? "deno"
      : "process" in globalThis
      ? "node"
      : "browser",
  x = new Map(),
  Ke = async (e, t) => {
    let s = e;
    if ((t && e.startsWith(".") && (s = Xe(qe(t), e)), x.has(s))) return s;
    throw `File "${s}" does not exist`;
  },
  Zt = async (e, t = "buffer", s) => {
    let r = await Ke(e, s);
    if (x.has(r)) {
      let n = x.get(r);
      return t == "string" ? ue(n) : n;
    }
  },
  Kt = async (e, t, s) => {
    let r = e;
    s && e.startsWith(".") && (r = Xe(qe(s), e));
    try {
      x.set(r, t instanceof Uint8Array ? t : ze(t));
    } catch {
      throw `Error occurred while writing to "${r}"`;
    }
  },
  C = (e) => typeof e == "object" && e != null,
  Jt = (e) => (typeof e == "object" ? e === null : typeof e != "function"),
  Qt = (e) => e !== "__proto__" && e !== "constructor" && e !== "prototype",
  Je = (e, t) => {
    if (e === t) return !0;
    if (C(e) && C(t)) {
      if (Object.keys(e).length !== Object.keys(t).length) return !1;
      for (var s in e) if (!Je(e[s], t[s])) return !1;
      return !0;
    }
  },
  es = (e, t) => {
    let s = Object.keys(t),
      r = {},
      n = 0;
    for (; n < s.length; n++) {
      let i = s[n],
        l = t[i];
      if (i in e) {
        let o = Array.isArray(e[i]) && Array.isArray(l);
        if (e[i] == l) continue;
        if (o)
          if (!Je(e[i], l)) r[i] = l;
          else continue;
        else if (C(e[i]) && C(l)) {
          let a = es(e[i], l);
          Object.keys(a).length && (r[i] = a);
        } else r[i] = l;
      } else r[i] = l;
    }
    return r;
  };
/*!
 * Based on assign-deep <https://github.com/jonschlinkert/assign-deep>
 *
 * Copyright (c) 2017-present, Jon Schlinkert.
 * Released under the MIT License.
 */ const q = (e, ...t) => {
    let s = 0;
    for (Jt(e) && (e = t[s++]), e || (e = {}); s < t.length; s++)
      if (C(t[s]))
        for (const r of Object.keys(t[s]))
          Qt(r) &&
            (C(e[r]) && C(t[s][r])
              ? (e[r] = q(Array.isArray(e[r]) ? [] : {}, e[r], t[s][r]))
              : (e[r] = t[s][r]));
    return e;
  },
  Qe = {
    entryPoints: ["/index.tsx"],
    cdn: D,
    compression: "gzip",
    esbuild: {
      target: ["esnext"],
      format: "esm",
      bundle: !0,
      minify: !0,
      treeShaking: !0,
      platform: "browser",
    },
  },
  et = q({}, Qe, {
    esbuild: {
      color: !0,
      globalName: "BundledCode",
      logLevel: "info",
      sourcemap: !1,
      incremental: !1,
    },
    ascii: "ascii",
    filesystem: {
      files: x,
      get: Zt,
      set: Kt,
      resolve: Ke,
      clear: () => x.clear(),
    },
    init: { platform: Yt },
  });
var ts = class {
    constructor(e) {
      this.map = new Map(e);
    }
    getMap() {
      return this.map;
    }
    get(e) {
      return this.map.get(e);
    }
    keys() {
      return Array.from(this.map.keys());
    }
    values() {
      return Array.from(this.map.values());
    }
    set(e, t) {
      return this.map.set(e, t), this;
    }
    add(e) {
      let t = this.size;
      return this.set(t, e), this;
    }
    get size() {
      return this.map.size;
    }
    get length() {
      return this.map.size;
    }
    last(e = 1) {
      let t = this.keys()[this.size - e];
      return this.get(t);
    }
    delete(e) {
      return this.map.delete(e);
    }
    remove(e) {
      return this.map.delete(e), this;
    }
    clear() {
      return this.map.clear(), this;
    }
    has(e) {
      return this.map.has(e);
    }
    entries() {
      return this.map.entries();
    }
    forEach(e, t) {
      return this.map.forEach(e, t), this;
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  },
  yr = (e, t, ...s) => {
    e.forEach((r) => {
      r[t](...s);
    });
  },
  dt = ({ callback: e = () => {}, scope: t = null, name: s = "event" }) => ({
    callback: e,
    scope: t,
    name: s,
  }),
  se = class extends ts {
    constructor(e = "event") {
      super(), (this.name = e);
    }
  },
  Ar = class extends ts {
    constructor() {
      super();
    }
    getEvent(e) {
      let t = this.get(e);
      return t instanceof se ? t : (this.set(e, new se(e)), this.get(e));
    }
    newListener(e, t, s) {
      let r = this.getEvent(e);
      return r.add(dt({ name: e, callback: t, scope: s })), r;
    }
    on(e, t, s) {
      if (typeof e > "u" || e == null) return this;
      typeof e == "string" && (e = e.trim().split(/\s/g));
      let r,
        n,
        i = typeof e == "object" && !Array.isArray(e),
        l = i ? t : s;
      return (
        i || (n = t),
        Object.keys(e).forEach((o) => {
          (r = i ? o : e[o]), i && (n = e[o]), this.newListener(r, n, l);
        }, this),
        this
      );
    }
    removeListener(e, t, s) {
      let r = this.get(e);
      if (r instanceof se && t) {
        let n = dt({ name: e, callback: t, scope: s });
        r.forEach((i, l) => {
          if (i.callback === n.callback && i.scope === n.scope)
            return r.remove(l);
        });
      }
      return r;
    }
    off(e, t, s) {
      if (typeof e > "u" || e == null) return this;
      typeof e == "string" && (e = e.trim().split(/\s/g));
      let r,
        n,
        i = typeof e == "object" && !Array.isArray(e),
        l = i ? t : s;
      return (
        i || (n = t),
        Object.keys(e).forEach((o) => {
          (r = i ? o : e[o]),
            i && (n = e[o]),
            typeof n == "function"
              ? this.removeListener(r, n, l)
              : this.remove(r);
        }, this),
        this
      );
    }
    once(e, t, s) {
      if (typeof e > "u" || e == null) return this;
      typeof e == "string" && (e = e.trim().split(/\s/g));
      let r = typeof e == "object" && !Array.isArray(e);
      return (
        Object.keys(e).forEach((n) => {
          let i = r ? n : e[n],
            l = r ? e[n] : t,
            o = r ? t : s,
            a = (...c) => {
              l.apply(o, c), this.removeListener(i, a, o);
            };
          this.newListener(i, a, o);
        }, this),
        this
      );
    }
    emit(e, ...t) {
      return typeof e > "u" || e == null
        ? this
        : (typeof e == "string" && (e = e.trim().split(/\s/g)),
          e.forEach((s) => {
            let r = this.get(s);
            r instanceof se &&
              r.forEach((n) => {
                let { callback: i, scope: l } = n;
                i.apply(l, t);
              });
          }, this),
          this);
    }
    clear() {
      return yr(this, "clear"), super.clear(), this;
    }
  };
const ss = {
    "init.start": console.log,
    "init.complete": console.info,
    "init.error": console.error,
    "init.loading": console.warn,
    "logger.log": console.log,
    "logger.error": console.error,
    "logger.warn": console.warn,
    "logger.info": console.info,
  },
  v = new Ar();
v.on(ss);
const _ = { initialized: !1, assets: [], esbuild: null },
  rs = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
  ns = ["B", "kiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
  is = ["b", "kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"],
  ls = [
    "b",
    "kibit",
    "Mibit",
    "Gibit",
    "Tibit",
    "Pibit",
    "Eibit",
    "Zibit",
    "Yibit",
  ],
  ke = (e, t, s) => {
    let r = e;
    return (
      typeof t == "string" || Array.isArray(t)
        ? (r = e.toLocaleString(t, s))
        : (t === !0 || s !== void 0) && (r = e.toLocaleString(void 0, s)),
      r
    );
  };
function Z(e, t) {
  if (!Number.isFinite(e))
    throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);
  t = { bits: !1, binary: !1, ...t };
  const s = t.bits ? (t.binary ? ls : is) : t.binary ? ns : rs;
  if (t.signed && e === 0) return ` 0 ${s[0]}`;
  const r = e < 0,
    n = r ? "-" : t.signed ? "+" : "";
  r && (e = -e);
  let i;
  if (
    (t.minimumFractionDigits !== void 0 &&
      (i = { minimumFractionDigits: t.minimumFractionDigits }),
    t.maximumFractionDigits !== void 0 &&
      (i = { maximumFractionDigits: t.maximumFractionDigits, ...i }),
    e < 1)
  ) {
    const c = ke(e, t.locale, i);
    return n + c + " " + s[0];
  }
  const l = Math.min(
    Math.floor(t.binary ? Math.log(e) / Math.log(1024) : Math.log10(e) / 3),
    s.length - 1
  );
  (e /= (t.binary ? 1024 : 1e3) ** l), i || (e = e.toPrecision(3));
  const o = ke(Number(e), t.locale, i),
    a = s[l];
  return n + o + " " + a;
}
const Ce = {
  37: "dim",
  31: "red",
  32: "green",
  34: "blue",
  36: "cyan",
  35: "magenta",
  33: "yellow",
  "41;31": "red-bg-red",
  "41;97": "red-bg-white",
  "42;32": "green-bg-green",
  "42;97": "green-bg-white",
  "44;34": "blue-bg-blue",
  "44;97": "blue-bg-white",
  "46;36": "cyan-bg-cyan",
  "46;30": "cyan-bg-black",
  "45;35": "magenta-bg-magenta",
  "45;30": "magenta-bg-black",
  "43;33": "yellow-bg-yellow",
  "43;30": "yellow-bg-black",
};
function os(e) {
  return e
    .replace(
      /\<br\>/g,
      `
`
    )
    .replace(/\&/g, "&amp;")
    .replace(/\"/g, "&quot;")
    .replace(/\'/g, "&#39;")
    .replace(/\</g, "&lt;")
    .replace(/\>/g, "&gt;");
}
class as {
  constructor() {
    (this.result = ""),
      (this._stack = []),
      (this._bold = !1),
      (this._underline = !1),
      (this._link = !1);
  }
  text(t) {
    this.result += os(t);
  }
  reset() {
    let t;
    for (; (t = this._stack.pop()); ) this.result += t;
  }
  bold() {
    this._bold ||
      ((this._bold = !0),
      (this.result += "<strong>"),
      this._stack.push("</strong>"));
  }
  underline() {
    this._underline ||
      ((this._underline = !0),
      (this.result += "<ins>"),
      this._stack.push("</ins>"));
  }
  last() {
    return this._stack[this._stack.length - 1];
  }
  color(t) {
    let s;
    for (; (s = this.last()) === "</span>"; )
      this._stack.pop(), (this.result += s);
    (this.result += `<span class="color-${t}">`), this._stack.push("</span>");
  }
  done() {
    return this.reset(), this.result;
  }
}
function tt(e) {
  e = e.trimEnd();
  let t = 0;
  const s = new as();
  for (let r of e.matchAll(/\x1B\[([\d;]+)m/g)) {
    const n = r[1];
    s.text(e.slice(t, r.index)),
      (t = r.index + r[0].length),
      n === "0"
        ? s.reset()
        : n === "1"
        ? s.bold()
        : n === "4"
        ? s.underline()
        : Ce[n] && s.color(Ce[n]);
  }
  return t < e.length && s.text(e.slice(t)), s.done();
}
const gt = async (e, t = "error", s = !0) => {
    const { formatMessages: r } = await Promise.resolve()
      .then(() => require("./esbuild-c946c952.cjs"))
      .then((i) => i.browser);
    return (await r(e, { color: s, kind: t })).map((i) =>
      s
        ? tt(
            i.replace(
              /(\s+)(\d+)(\s+)\│/g,
              `
$1$2$3\u2502`
            )
          )
        : i
    );
  },
  Sr = { build: us, init: st };
async function cs(e = "node") {
  try {
    switch (e) {
      case "node":
        return await Promise.resolve().then(() => ht(require("esbuild")));
      case "deno":
        return await Promise.resolve().then(() =>
          ht(require(`https://deno.land/x/esbuild@v${zs}/mod.js`))
        );
      default:
        return await Promise.resolve()
          .then(() => require("./esbuild-c946c952.cjs"))
          .then((t) => t.browser);
    }
  } catch (t) {
    throw t;
  }
}
async function st({ platform: e, ...t } = {}) {
  try {
    if (!_.initialized) {
      if (
        ((_.initialized = !0),
        v.emit("init.start"),
        (_.esbuild = await cs(e)),
        e !== "node" && e !== "deno")
      ) {
        const { default: s } = await Promise.resolve().then(() =>
          require("./esbuild-wasm-73b45c7a.cjs")
        );
        await _.esbuild.initialize({
          wasmModule: new WebAssembly.Module(await s()),
          ...t,
        });
      }
      v.emit("init.complete");
    }
    return _.esbuild;
  } catch (s) {
    v.emit("init.error", s), console.error(s);
  }
}
async function us(e = {}) {
  _.initialized || v.emit("init.loading");
  const t = q({}, et, e),
    { build: s } = await st(t.init),
    { define: r = {}, loader: n = {}, ...i } = t.esbuild ?? {};
  let l = [],
    o = [],
    a;
  try {
    console.time("esbuild.build");
    try {
      const c = "p.env.NODE_ENV".replace("p.", "process.");
      a = await s({
        entryPoints: t?.entryPoints ?? [],
        loader: {
          ".png": "file",
          ".jpeg": "file",
          ".ttf": "file",
          ".svg": "text",
          ".html": "text",
          ".scss": "css",
        },
        define: { __NODE__: "false", [c]: '"production"', ...r },
        write: !1,
        outdir: "/",
        plugins: [
          Wt(v, _, t),
          bt(v, _, t),
          Xt(v, _, t),
          qt(v, _, t),
          Vt(v, _, t),
        ],
        ...i,
      });
      console.timeLog("esbuild.build", "build");
    } catch (c) {
      if (c.errors) {
        const h = [...(await gt(c.errors, "error", !1))],
          f = [...(await gt(c.errors, "error"))];
        v.emit("logger.error", h, f);
        const g =
          (f.length > 1 ? `${f.length} error(s) ` : "") +
          "(if you are having trouble solving this issue, please create a new issue in the repo, https://github.com/okikio/bundle)";
        return v.emit("logger.error", g);
      } else throw c;
    }
    console.timeEnd("esbuild.build");
    return (
      (l = await Promise.all([..._.assets].concat(a?.outputFiles))),
      (o = await Promise.all(
        l
          ?.map(({ path: c, text: h, contents: f }) =>
            /\.map$/.test(c)
              ? null
              : (i?.logLevel == "verbose" &&
                  (/\.(wasm|png|jpeg|webp)$/.test(c)
                    ? v.emit("logger.log", "Output File: " + c)
                    : v.emit(
                        "logger.log",
                        "Output File: " +
                          c +
                          `
` +
                          h
                      )),
                { path: c, text: h, contents: f })
          )
          ?.filter((c) => ![void 0, null].includes(c))
      )),
      { contents: o, outputs: l, ...a }
    );
  } catch {}
}
async function Rr(e = [], t = {}) {
  const s = q({}, et, t);
  let { compression: r = {} } = s,
    { type: n = "gzip", quality: i = 9 } =
      typeof r == "string" ? { type: r } : r ?? {},
    l = (e.reduce((h, { contents: f }) => h + f.byteLength, 0)),
    o = await (async () => {
      switch (n) {
        case "lz4":
          const { compress: h, getWASM: f } = await Promise.resolve().then(
            () => Ds
          );
          return await f(), async (u) => await h(u);
        case "brotli":
          const { compress: g, getWASM: E } = await Promise.resolve().then(
            () => Is
          );
          return await E(), async (u) => await g(u, u.length, i);
        default:
          const { gzip: p, getWASM: d } = await Promise.resolve().then(
            () => xs
          );
          return await d(), async (u) => await p(u, i);
      }
    })(),
    a = await Promise.all(e.map(({ contents: h }) => o(h))),
    c = (a.reduce((h, { length: f }) => h + f, 0));
  return {
    type: n,
    content: a,
    totalInitialSize: l,
    totalCompressedSize: c,
    initialSize: `${Z(l)}`,
    size: `${Z(c)} (${n})`,
  };
}
const vr = (e, t = 300, s) => {
    let r;
    return function (...n) {
      let i = this,
        l = () => {
          (r = null), s || e.apply(i, n);
        },
        o = s && !r;
      clearTimeout(r), (r = setTimeout(l, t)), o && e.apply(i, n);
    };
  },
  rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  nt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
  X = {};
function it(e, t) {
  if (!X[e]) {
    X[e] = {};
    for (let s = 0; s < e.length; s++) X[e][e.charAt(s)] = s;
  }
  return X[e][t];
}
function br(e) {
  if (e == null) return "";
  const t = me(e, 6, (s) => rt.charAt(s));
  switch (t.length % 4) {
    default:
    case 0:
      return t;
    case 1:
      return t + "===";
    case 2:
      return t + "==";
    case 3:
      return t + "=";
  }
}
function Tr(e) {
  return e == null
    ? ""
    : e == ""
    ? null
    : Ee(e.length, 32, (t) => it(rt, e.charAt(t)));
}
function _r(e) {
  return e == null ? "" : me(e, 6, (t) => nt.charAt(t));
}
function Or(e) {
  return e == null
    ? ""
    : e == ""
    ? null
    : ((e = e.replaceAll(" ", "+")),
      Ee(e.length, 32, (t) => it(nt, e.charAt(t))));
}
function Pr(e) {
  return me(e, 16, String.fromCharCode);
}
function Nr(e) {
  return e == null
    ? ""
    : e == ""
    ? null
    : Ee(e.length, 32768, (t) => e.charCodeAt(t));
}
function me(e, t, s) {
  if (e == null) return "";
  const r = [],
    n = {},
    i = {};
  let l,
    o,
    a,
    c = "",
    h = "",
    f = "",
    g = 2,
    E = 3,
    p = 2,
    d = 0,
    u = 0;
  for (o = 0; o < e.length; o += 1)
    if (
      ((c = e.charAt(o)),
      Object.prototype.hasOwnProperty.call(n, c) || ((n[c] = E++), (i[c] = !0)),
      (f = h + c),
      Object.prototype.hasOwnProperty.call(n, f))
    )
      h = f;
    else {
      if (Object.prototype.hasOwnProperty.call(i, h)) {
        if (h.charCodeAt(0) < 256) {
          for (l = 0; l < p; l++)
            (d = d << 1), u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++;
          for (a = h.charCodeAt(0), l = 0; l < 8; l++)
            (d = (d << 1) | (a & 1)),
              u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++,
              (a = a >> 1);
        } else {
          for (a = 1, l = 0; l < p; l++)
            (d = (d << 1) | a),
              u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++,
              (a = 0);
          for (a = h.charCodeAt(0), l = 0; l < 16; l++)
            (d = (d << 1) | (a & 1)),
              u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++,
              (a = a >> 1);
        }
        g--, g == 0 && ((g = Math.pow(2, p)), p++), delete i[h];
      } else
        for (a = n[h], l = 0; l < p; l++)
          (d = (d << 1) | (a & 1)),
            u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++,
            (a = a >> 1);
      g--, g == 0 && ((g = Math.pow(2, p)), p++), (n[f] = E++), (h = String(c));
    }
  if (h !== "") {
    if (Object.prototype.hasOwnProperty.call(i, h)) {
      if (h.charCodeAt(0) < 256) {
        for (l = 0; l < p; l++)
          (d = d << 1), u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++;
        for (a = h.charCodeAt(0), l = 0; l < 8; l++)
          (d = (d << 1) | (a & 1)),
            u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++,
            (a = a >> 1);
      } else {
        for (a = 1, l = 0; l < p; l++)
          (d = (d << 1) | a),
            u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++,
            (a = 0);
        for (a = h.charCodeAt(0), l = 0; l < 16; l++)
          (d = (d << 1) | (a & 1)),
            u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++,
            (a = a >> 1);
      }
      g--, g == 0 && ((g = Math.pow(2, p)), p++), delete i[h];
    } else
      for (a = n[h], l = 0; l < p; l++)
        (d = (d << 1) | (a & 1)),
          u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++,
          (a = a >> 1);
    g--, g == 0 && ((g = Math.pow(2, p)), p++);
  }
  for (a = 2, l = 0; l < p; l++)
    (d = (d << 1) | (a & 1)),
      u == t - 1 ? ((u = 0), r.push(s(d)), (d = 0)) : u++,
      (a = a >> 1);
  for (;;)
    if (((d = d << 1), u == t - 1)) {
      r.push(s(d));
      break;
    } else u++;
  return r.join("");
}
function Ee(e, t, s) {
  let r = [],
    n = 4,
    i = 4,
    l = 3,
    o = "",
    a = [],
    c,
    h,
    f,
    g,
    E,
    p,
    d,
    u = { val: s(0), position: t, index: 1 };
  for (c = 0; c < 3; c += 1) r[c] = c;
  for (f = 0, E = Math.pow(2, 2), p = 1; p != E; )
    (g = u.val & u.position),
      (u.position >>= 1),
      u.position == 0 && ((u.position = t), (u.val = s(u.index++))),
      (f |= (g > 0 ? 1 : 0) * p),
      (p <<= 1);
  switch (f) {
    case 0:
      for (f = 0, E = Math.pow(2, 8), p = 1; p != E; )
        (g = u.val & u.position),
          (u.position >>= 1),
          u.position == 0 && ((u.position = t), (u.val = s(u.index++))),
          (f |= (g > 0 ? 1 : 0) * p),
          (p <<= 1);
      d = String.fromCharCode(f);
      break;
    case 1:
      for (f = 0, E = Math.pow(2, 16), p = 1; p != E; )
        (g = u.val & u.position),
          (u.position >>= 1),
          u.position == 0 && ((u.position = t), (u.val = s(u.index++))),
          (f |= (g > 0 ? 1 : 0) * p),
          (p <<= 1);
      d = String.fromCharCode(f);
      break;
    case 2:
      return "";
  }
  for (r[3] = d, h = d, a.push(d); ; ) {
    if (u.index > e) return "";
    for (f = 0, E = Math.pow(2, l), p = 1; p != E; )
      (g = u.val & u.position),
        (u.position >>= 1),
        u.position == 0 && ((u.position = t), (u.val = s(u.index++))),
        (f |= (g > 0 ? 1 : 0) * p),
        (p <<= 1);
    switch ((d = f)) {
      case 0:
        for (f = 0, E = Math.pow(2, 8), p = 1; p != E; )
          (g = u.val & u.position),
            (u.position >>= 1),
            u.position == 0 && ((u.position = t), (u.val = s(u.index++))),
            (f |= (g > 0 ? 1 : 0) * p),
            (p <<= 1);
        (r[i++] = String.fromCharCode(f)), (d = i - 1), n--;
        break;
      case 1:
        for (f = 0, E = Math.pow(2, 16), p = 1; p != E; )
          (g = u.val & u.position),
            (u.position >>= 1),
            u.position == 0 && ((u.position = t), (u.val = s(u.index++))),
            (f |= (g > 0 ? 1 : 0) * p),
            (p <<= 1);
        (r[i++] = String.fromCharCode(f)), (d = i - 1), n--;
        break;
      case 2:
        return a.join("");
    }
    if ((n == 0 && ((n = Math.pow(2, l)), l++), r[d])) o = r[d];
    else if (d === i && typeof h == "string") o = h + h.charAt(0);
    else return null;
    a.push(o),
      (r[i++] = h + o.charAt(0)),
      n--,
      (h = o),
      n == 0 && ((n = Math.pow(2, l)), l++);
  }
}
const fs = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        keyStrBase64: rt,
        keyStrUriSafe: nt,
        baseReverseDic: X,
        getBaseValue: it,
        compressToBase64: br,
        decompressFromBase64: Tr,
        compressToURL: _r,
        decompressFromURL: Or,
        compress: Pr,
        decompress: Nr,
        _compress: me,
        _decompress: Ee,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  { decompressFromURL: kr } = fs,
  hs = (e) => (e ?? "").split(/\],/).map((t) => t.replace(/\[|\]/g, "")),
  Cr = (e) => {
    try {
      const t = e.searchParams;
      let s = "",
        r = t.get("query") || t.get("q"),
        n = t.get("treeshake");
      if (r) {
        let o = r.trim().split(","),
          a = hs((n ?? "").trim());
        s +=
          `// Click Build for the Bundled, Minified & Compressed package size
` +
          o.map((c, h) => {
            let f =
                a[h] && a[h].trim() !== "*"
                  ? a[h].trim().split(",").join(", ")
                  : "*",
              [, , g = "export", E] = /^(\((.*)\))?(.*)/.exec(c);
            return `${g} ${f} from ${JSON.stringify(E)};`;
          }).join(`
`);
      }
      let i = t.get("share");
      i &&
        (s +=
          `
` + kr(i.trim()));
      let l = t.get("text");
      return (
        l &&
          (s +=
            `
` +
            JSON.parse(
              /^["']/.test(l) && /["']$/.test(l)
                ? l
                : JSON.stringify("" + l).replace(/\\\\/g, "\\")
            )),
        s.trim()
      );
    } catch {}
  },
  Ir = (e) => {
    try {
      const s = e.searchParams.get("config") ?? "{}";
      return q({}, Qe, JSON.parse(s || "{}"));
    } catch {}
  },
  Lr = "2.0.0",
  Ie = 256,
  W = Number.MAX_SAFE_INTEGER || 9007199254740991,
  oe = 16;
let ps = 0;
const $ = (e, t) => ({
    index: ps++,
    pattern: e,
    regex: new RegExp(e, t ? "g" : void 0),
  }),
  B = "0|[1-9]\\d*",
  G = "[0-9]+",
  lt = "\\d*[a-zA-Z-][a-zA-Z0-9-]*",
  Le = `(?:${B}|${lt})`,
  xe = `(?:${G}|${lt})`,
  De = "[0-9A-Za-z-]+",
  ds = `(${B})\\.(${B})\\.(${B})`,
  gs = `(${G})\\.(${G})\\.(${G})`,
  ee = `(?:\\+(${De}(?:\\.${De})*))`,
  ot = `(?:-(${Le}(?:\\.${Le})*))`,
  at = `(?:-?(${xe}(?:\\.${xe})*))`,
  Ae = `v?${ds}${ot}?${ee}?`,
  re = `[v=\\s]*${gs}${at}?${ee}?`,
  ae = `${B}|x|X|\\*`,
  ce = `${G}|x|X|\\*`,
  U = "((?:<|>)?=?)",
  L = `[v=\\s]*(${ae})(?:\\.(${ae})(?:\\.(${ae})(?:${ot})?${ee}?)?)?`,
  z = `[v=\\s]*(${ce})(?:\\.(${ce})(?:\\.(${ce})(?:${at})?${ee}?)?)?`,
  mt = `(^|[^\\d])(\\d{1,${oe}})(?:\\.(\\d{1,${oe}}))?(?:\\.(\\d{1,${oe}}))?(?:$|[^\\d])`,
  Se = "(?:~>?)",
  Re = "(?:\\^)",
  y = {
    NUMERICIDENTIFIER: $(B),
    NUMERICIDENTIFIERLOOSE: $(G),
    NONNUMERICIDENTIFIER: $(lt),
    MAINVERSION: $(ds),
    MAINVERSIONLOOSE: $(gs),
    PRERELEASEIDENTIFIER: $(Le),
    PRERELEASEIDENTIFIERLOOSE: $(xe),
    PRERELEASE: $(ot),
    PRERELEASELOOSE: $(at),
    BUILDIDENTIFIER: $(De),
    BUILD: $(ee),
    FULLPLAIN: $(Ae),
    FULL: $(`^${Ae}$`),
    LOOSEPLAIN: $(re),
    LOOSE: $(`^${re}$`),
    GTLT: $(U),
    XRANGEIDENTIFIERLOOSE: $(ce),
    XRANGEIDENTIFIER: $(ae),
    XRANGEPLAIN: $(L),
    XRANGEPLAINLOOSE: $(z),
    XRANGE: $(`^${U}\\s*${L}$`),
    XRANGELOOSE: $(`^${U}\\s*${z}$`),
    COERCE: $(mt),
    COERCERTL: $(mt, !0),
    LONETILDE: $("(?:~>?)"),
    TILDETRIM: $(`(\\s*)${Se}\\s+`, !0),
    TILDE: $(`^${Se}${L}$`),
    TILDELOOSE: $(`^${Se}${z}$`),
    LONECARET: $("(?:\\^)"),
    CARETTRIM: $(`(\\s*)${Re}\\s+`, !0),
    CARET: $(`^${Re}${L}$`),
    CARETLOOSE: $(`^${Re}${z}$`),
    COMPARATORLOOSE: $(`^${U}\\s*(${re})$|^$`),
    COMPARATOR: $(`^${U}\\s*(${Ae})$|^$`),
    COMPARATORTRIM: $(`(\\s*)${U}\\s*(${re}|${L})`, !0),
    HYPHENRANGE: $(`^\\s*(${L})\\s+-\\s+(${L})\\s*$`),
    HYPHENRANGELOOSE: $(`^\\s*(${z})\\s+-\\s+(${z})\\s*$`),
    STAR: $("(<|>)?=?\\s*\\*"),
    GTE0: $("^\\s*>=\\s*0\\.0\\.0\\s*$"),
    GTE0PRE: $("^\\s*>=\\s*0\\.0\\.0-0\\s*$"),
  },
  xr = ["includePrerelease", "loose", "rtl"],
  $e = (e) =>
    e
      ? typeof e != "object"
        ? { loose: !0 }
        : xr.filter((t) => e[t]).reduce((t, s) => ((t[s] = !0), t), {})
      : {},
  je = /^[0-9]+$/,
  V = (e, t) => {
    const s = je.test(e),
      r = je.test(t);
    let n = e,
      i = t;
    return (
      s && r && ((n = +e), (i = +t)),
      n === i ? 0 : s && !r ? -1 : r && !s ? 1 : n < i ? -1 : 1
    );
  };
class O {
  constructor(t, s) {
    if (((s = $e(s)), t instanceof O)) {
      if (
        t.loose === !!s.loose &&
        t.includePrerelease === !!s.includePrerelease
      )
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid Version: ${t}`);
    if (t.length > Ie)
      throw new TypeError(`version is longer than ${Ie} characters`);
    (this.options = s),
      (this.loose = !!s.loose),
      (this.includePrerelease = !!s.includePrerelease);
    const r = t.trim().match(s.loose ? y.LOOSE.regex : y.FULL.regex);
    if (!r) throw new TypeError(`Invalid Version: ${t}`);
    if (
      ((this.raw = t),
      (this.major = +r[1]),
      (this.minor = +r[2]),
      (this.patch = +r[3]),
      this.major > W || this.major < 0)
    )
      throw new TypeError("Invalid major version");
    if (this.minor > W || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > W || this.patch < 0)
      throw new TypeError("Invalid patch version");
    r[4]
      ? (this.prerelease = r[4].split(".").map((n) => {
          if (/^[0-9]+$/.test(n)) {
            const i = +n;
            if (i >= 0 && i < W) return i;
          }
          return n;
        }))
      : (this.prerelease = []),
      (this.build = r[5] ? r[5].split(".") : []),
      this.format();
  }
  format() {
    return (
      (this.version = `${this.major}.${this.minor}.${this.patch}`),
      this.prerelease.length &&
        (this.version += `-${this.prerelease.join(".")}`),
      this.version
    );
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (!(t instanceof O)) {
      if (typeof t == "string" && t === this.version) return 0;
      t = new O(t, this.options);
    }
    return t.version === this.version
      ? 0
      : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return (
      t instanceof O || (t = new O(t, this.options)),
      V(this.major, t.major) || V(this.minor, t.minor) || V(this.patch, t.patch)
    );
  }
  comparePre(t) {
    if (
      (t instanceof O || (t = new O(t, this.options)),
      this.prerelease.length && !t.prerelease.length)
    )
      return -1;
    if (!this.prerelease.length && t.prerelease.length) return 1;
    if (!this.prerelease.length && !t.prerelease.length) return 0;
    let s = 0;
    do {
      const r = this.prerelease[s],
        n = t.prerelease[s];
      if (r === void 0 && n === void 0) return 0;
      if (n === void 0) return 1;
      if (r === void 0) return -1;
      if (r === n) continue;
      return V(r, n);
    } while (++s);
  }
}
const pe = Symbol("SemVer ANY");
class we {
  constructor(t, s) {
    if (((s = $e(s)), t instanceof we)) {
      if (t.loose === !!s.loose) return t;
      t = t.value;
    }
    (this.options = s),
      (this.loose = !!s.loose),
      this.parse(t),
      this.semver === pe
        ? (this.value = "")
        : (this.value = this.operator + this.semver.version);
  }
  parse(t) {
    const s = this.options.loose ? y.COMPARATORLOOSE.regex : y.COMPARATOR.regex,
      r = t.match(s);
    if (!r) throw new TypeError(`Invalid comparator: ${t}`);
    (this.operator = r[1] !== void 0 ? r[1] : ""),
      this.operator === "=" && (this.operator = ""),
      r[2]
        ? (this.semver = new O(r[2], this.options.loose))
        : (this.semver = pe);
  }
  toString() {
    return this.value;
  }
}
const H = new Map(),
  ne = new Map(),
  Dr = 1e3,
  ms = "$1^",
  Es = "$1~",
  $s = "$1$2$3",
  Me = (e) => e.value === "<0.0.0-0",
  ws = (e) => e.value === "",
  ys = (e, t) => (
    (e = Rs(e, t)), (e = As(e, t)), (e = bs(e, t)), (e = _s(e)), e
  ),
  R = (e) => !e || e.toLowerCase() === "x" || e === "*",
  As = (e, t) =>
    e
      .trim()
      .split(/\s+/)
      .map((s) => Ss(s, t))
      .join(" "),
  Ss = (e, t) => {
    const s = t.loose ? y.TILDELOOSE.regex : y.TILDE.regex;
    return e.replace(s, (r, n, i, l, o) => {
      let a;
      return (
        R(n)
          ? (a = "")
          : R(i)
          ? (a = `>=${n}.0.0 <${+n + 1}.0.0-0`)
          : R(l)
          ? (a = `>=${n}.${i}.0 <${n}.${+i + 1}.0-0`)
          : o
          ? (a = `>=${n}.${i}.${l}-${o} <${n}.${+i + 1}.0-0`)
          : (a = `>=${n}.${i}.${l} <${n}.${+i + 1}.0-0`),
        a
      );
    });
  },
  Rs = (e, t) =>
    e
      .trim()
      .split(/\s+/)
      .map((s) => vs(s, t))
      .join(" "),
  vs = (e, t) => {
    const s = t.loose ? y.CARETLOOSE.regex : y.CARET.regex,
      r = t.includePrerelease ? "-0" : "";
    return e.replace(s, (n, i, l, o, a) => {
      let c;
      return (
        R(i)
          ? (c = "")
          : R(l)
          ? (c = `>=${i}.0.0${r} <${+i + 1}.0.0-0`)
          : R(o)
          ? i === "0"
            ? (c = `>=${i}.${l}.0${r} <${i}.${+l + 1}.0-0`)
            : (c = `>=${i}.${l}.0${r} <${+i + 1}.0.0-0`)
          : a
          ? i === "0"
            ? l === "0"
              ? (c = `>=${i}.${l}.${o}-${a} <${i}.${l}.${+o + 1}-0`)
              : (c = `>=${i}.${l}.${o}-${a} <${i}.${+l + 1}.0-0`)
            : (c = `>=${i}.${l}.${o}-${a} <${+i + 1}.0.0-0`)
          : i === "0"
          ? l === "0"
            ? (c = `>=${i}.${l}.${o}${r} <${i}.${l}.${+o + 1}-0`)
            : (c = `>=${i}.${l}.${o}${r} <${i}.${+l + 1}.0-0`)
          : (c = `>=${i}.${l}.${o} <${+i + 1}.0.0-0`),
        c
      );
    });
  },
  bs = (e, t) =>
    e
      .split(/\s+/)
      .map((s) => Ts(s, t))
      .join(" "),
  Ts = (e, t) => {
    e = e.trim();
    const s = t.loose ? y.XRANGELOOSE.regex : y.XRANGE.regex;
    return e.replace(s, (r, n, i, l, o, a) => {
      const c = R(i),
        h = c || R(l),
        f = h || R(o),
        g = f;
      return (
        n === "=" && g && (n = ""),
        (a = t.includePrerelease ? "-0" : ""),
        c
          ? n === ">" || n === "<"
            ? (r = "<0.0.0-0")
            : (r = "*")
          : n && g
          ? (h && (l = 0),
            (o = 0),
            n === ">"
              ? ((n = ">="),
                h ? ((i = +i + 1), (l = 0), (o = 0)) : ((l = +l + 1), (o = 0)))
              : n === "<=" && ((n = "<"), h ? (i = +i + 1) : (l = +l + 1)),
            n === "<" && (a = "-0"),
            (r = `${n + i}.${l}.${o}${a}`))
          : h
          ? (r = `>=${i}.0.0${a} <${+i + 1}.0.0-0`)
          : f && (r = `>=${i}.${l}.0${a} <${i}.${+l + 1}.0-0`),
        r
      );
    });
  },
  _s = (e, t) => e.trim().replace(y.STAR.regex, ""),
  Os = (e, t) =>
    e.trim().replace(y[t.includePrerelease ? "GTE0PRE" : "GTE0"].regex, ""),
  Ps = (e) => (t, s, r, n, i, l, o, a, c, h, f, g, E) => (
    R(r)
      ? (s = "")
      : R(n)
      ? (s = `>=${r}.0.0${e ? "-0" : ""}`)
      : R(i)
      ? (s = `>=${r}.${n}.0${e ? "-0" : ""}`)
      : l
      ? (s = `>=${s}`)
      : (s = `>=${s}${e ? "-0" : ""}`),
    R(c)
      ? (a = "")
      : R(h)
      ? (a = `<${+c + 1}.0.0-0`)
      : R(f)
      ? (a = `<${c}.${+h + 1}.0-0`)
      : g
      ? (a = `<=${c}.${h}.${f}-${g}`)
      : e
      ? (a = `<${c}.${h}.${+f + 1}-0`)
      : (a = `<=${a}`),
    `${s} ${a}`.trim()
  ),
  Ns = (e, t, s) => {
    for (let r = 0; r < e.length; r++) if (!e[r].test(t)) return !1;
    if (t.prerelease.length && !s.includePrerelease) {
      for (let r = 0; r < e.length; r++)
        if (e[r].semver !== pe && e[r].semver.prerelease.length > 0) {
          const n = e[r].semver;
          if (n.major === t.major && n.minor === t.minor && n.patch === t.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
class K {
  constructor(t, s) {
    if (((s = $e(s)), t instanceof K))
      return t.loose === !!s.loose &&
        t.includePrerelease === !!s.includePrerelease
        ? t
        : new K(t.raw, s);
    if (
      ((this.options = s),
      (this.loose = !!s.loose),
      (this.includePrerelease = !!s.includePrerelease),
      (this.raw = t),
      (this.set = t
        .split("||")
        .map((r) => this.parseRange(r.trim()))
        .filter((r) => r.length)),
      !this.set.length)
    )
      throw new TypeError(`Invalid SemVer Range: ${t}`);
    if (this.set.length > 1) {
      const r = this.set[0];
      if (
        ((this.set = this.set.filter((n) => !Me(n[0]))), this.set.length === 0)
      )
        this.set = [r];
      else if (this.set.length > 1) {
        for (const n of this.set)
          if (n.length === 1 && ws(n[0])) {
            this.set = [n];
            break;
          }
      }
    }
    this.format();
  }
  format() {
    return (
      (this.range = this.set
        .map((t) => t.join(" ").trim())
        .join("||")
        .trim()),
      this.range
    );
  }
  toString() {
    return this.range;
  }
  parseRange(t) {
    t = t.trim();
    const r = `parseRange:${Object.keys(this.options).join(",")}:${t}`;
    if (H.has(r)) return ne.set(r, Date.now()), H.get(r);
    const n = this.options.loose,
      i = n ? y.HYPHENRANGELOOSE.regex : y.HYPHENRANGE.regex;
    (t = t.replace(i, Ps(this.options.includePrerelease))),
      (t = t.replace(y.COMPARATORTRIM.regex, $s)),
      (t = t.replace(y.TILDETRIM.regex, Es)),
      (t = t.replace(y.CARETTRIM.regex, ms)),
      (t = t.split(/\s+/).join(" "));
    let l = t
      .split(" ")
      .map((f) => ys(f, this.options))
      .join(" ")
      .split(/\s+/)
      .map((f) => Os(f, this.options));
    n && (l = l.filter((f) => !!f.match(y.COMPARATORLOOSE.regex)));
    const o = new Map(),
      a = l.map((f) => new we(f, this.options));
    for (const f of a) {
      if (Me(f)) return [f];
      o.set(f.value, f);
    }
    o.size > 1 && o.has("") && o.delete("");
    const c = [...o.values()];
    let h = c;
    if ((H.set(r, h), ne.set(r, Date.now()), H.size >= Dr)) {
      let g = [...ne.entries()].sort((E, p) => E[1] - p[1])[0][0];
      H.delete(g), ne.delete(g);
    }
    return c;
  }
  test(t) {
    if (!t) return !1;
    if (typeof t == "string")
      try {
        t = new O(t, this.options);
      } catch {
        return !1;
      }
    for (let s = 0; s < this.set.length; s++)
      if (Ns(this.set[s], t, this.options)) return !0;
    return !1;
  }
}
function Ue(e, t, s) {
  let r = null,
    n = null,
    i = null;
  try {
    i = new K(t, s);
  } catch {
    return null;
  }
  return (
    e.forEach((l) => {
      i.test(l) && (!r || n.compare(l) === -1) && ((r = l), (n = new O(r, s)));
    }),
    r
  );
}
const jr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        SEMVER_SPEC_VERSION: Lr,
        MAX_LENGTH: Ie,
        MAX_SAFE_INTEGER: W,
        MAX_SAFE_COMPONENT_LENGTH: oe,
        get R() {
          return ps;
        },
        createToken: $,
        tokens: y,
        parseOptions: $e,
        numeric: je,
        compareIdentifiers: V,
        SemVer: O,
        ANY: pe,
        Comparator: we,
        caretTrimReplace: ms,
        tildeTrimReplace: Es,
        comparatorTrimReplace: $s,
        isNullSet: Me,
        isAny: ws,
        parseComparator: ys,
        isX: R,
        replaceTildes: As,
        replaceTilde: Ss,
        replaceCarets: Rs,
        replaceCaret: vs,
        replaceXRanges: bs,
        replaceXRange: Ts,
        replaceStars: _s,
        replaceGTE0: Os,
        hyphenReplace: Ps,
        testSet: Ns,
        Range: K,
        maxSatisfying: Ue,
        default: Ue,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  te = (e) => {
    const t = "https://registry.npmjs.com";
    let { name: s, version: r, path: n } = Q(e),
      i = `${t}/-/v1/search?text=${encodeURIComponent(
        s
      )}&popularity=0.5&size=30`,
      l = `${t}/${s}/${r}`,
      o = `${t}/${s}`;
    return {
      searchURL: i,
      packageURL: o,
      packageVersionURL: l,
      version: r,
      name: s,
      path: n,
    };
  },
  Mr = async (e) => {
    let { searchURL: t } = te(e),
      s;
    try {
      s = await (await J(t, !1)).json();
    } catch (n) {
      throw (console.warn(n), n);
    }
    return { packages: s?.objects, info: s };
  },
  ct = async (e) => {
    let { packageURL: t } = te(e);
    try {
      return await (await J(t, !1)).json();
    } catch (s) {
      throw (console.warn(s), s);
    }
  },
  ks = async (e) => {
    try {
      let t = await ct(e),
        s = Object.keys(t.versions),
        r = t["dist-tags"];
      return { versions: s, tags: r };
    } catch (t) {
      throw (console.warn(t), t);
    }
  },
  Cs = async (e) => {
    try {
      let { version: t } = te(e),
        s = await ks(e);
      if (s) {
        const { versions: r, tags: n } = s;
        return t in n && (t = n[t]), r.includes(t) ? t : Ue(r, t);
      }
    } catch (t) {
      throw (console.warn(t), t);
    }
  },
  Ur = async (e) => {
    try {
      let { name: t } = te(e),
        s = await Cs(e);
      return await ct(`${t}@${s}`);
    } catch (t) {
      throw (console.warn(t), t);
    }
  };
let ve;
const ut = async () => {
  if (ve) return ve;
  const e = await Promise.resolve().then(() =>
      require("./brotli-bbab72ea.cjs")
    ),
    { default: t, source: s } = e;
  return await t(await s()), (ve = e);
};
async function zr(e, t = 4096, s = 6, r = 22) {
  const { compress: n } = await ut();
  return n(e, t, s, r);
}
async function Fr(e, t = 4096) {
  const { decompress: s } = await ut();
  return s(e, t);
}
const Is = Object.freeze(
  Object.defineProperty(
    { __proto__: null, getWASM: ut, compress: zr, decompress: Fr },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
let Ls, be;
const j = async (e) => {
  if (be) return be;
  const t = await Promise.resolve().then(() =>
      require("./denoflate-4273bc65.cjs")
    ),
    { default: s } = t,
    { wasm: r } = await Promise.resolve().then(() =>
      require("./gzip-23950580.cjs")
    );
  return (Ls = await s(e ?? (await r()))), (be = t);
};
async function Br(e, t) {
  return (await j()).deflate(e, t);
}
async function Gr(e) {
  return (await j()).inflate(e);
}
async function qr(e, t) {
  return (await j()).gzip(e, t);
}
async function Hr(e) {
  return (await j()).gunzip(e);
}
async function Xr(e, t) {
  return (await j()).zlib(e, t);
}
async function Wr(e) {
  return (await j()).unzlib(e);
}
const Vr = Ls,
  xs = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        getWASM: j,
        deflate: Br,
        inflate: Gr,
        gzip: qr,
        gunzip: Hr,
        zlib: Xr,
        unzlib: Wr,
        default: Vr,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
let Te;
const ft = async () => {
  if (Te) return Te;
  const e = await Promise.resolve().then(() => require("./lz4-10e21a59.cjs")),
    { default: t, source: s } = e;
  return await t(await s()), (Te = e);
};
async function Yr(e) {
  const { lz4_compress: t } = await ft();
  return t(e);
}
async function Zr(e) {
  const { lz4_decompress: t } = await ft();
  return t(e);
}
const Ds = Object.freeze(
  Object.defineProperty(
    { __proto__: null, getWASM: ft, compress: Yr, decompress: Zr },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Kr(e) {
  if (typeof e == "string") return btoa(e);
  {
    const t = new Uint8Array(e);
    let s = "";
    for (let r = 0; r < t.length; ++r) s += String.fromCharCode(t[r]);
    return btoa(s);
  }
}
function Jr(e) {
  const t = js(e),
    s = new Uint8Array(t.length);
  for (let r = 0; r < s.length; ++r) s[r] = t.charCodeAt(r);
  return s.buffer;
}
function js(e) {
  return atob(e);
}
const Qr = Object.freeze(
  Object.defineProperty(
    { __proto__: null, encode: Kr, decode: Jr, decodeString: js },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
exports.schema = Us.schema;
exports.ALIAS = Wt;
exports.ALIAS_NAMESPACE = Ne;
exports.ALIAS_RESOLVE = ie;
exports.AnsiBuffer = as;
exports.BIBIT_UNITS = ls;
exports.BIBYTE_UNITS = ns;
exports.BIT_UNITS = is;
exports.BYTE_UNITS = rs;
exports.CACHE = Be;
exports.CACHE_NAME = Tt;
exports.CDN = qt;
exports.CDN_NAMESPACE = Pe;
exports.CDN_RESOLVE = he;
exports.DEFAULT_CDN_HOST = D;
exports.DefaultConfig = et;
exports.DeprecatedAPIs = St;
exports.EMPTY_EXPORT = wt;
exports.ESCAPE_TO_COLOR = Ce;
exports.EVENTS = v;
exports.EVENTS_OPTS = ss;
exports.EXTERNAL = bt;
exports.EXTERNALS_NAMESPACE = F;
exports.EasyDefaultConfig = Qe;
exports.ExternalPackages = Rt;
exports.FileSystem = x;
exports.HTTP = Xt;
exports.HTTP_NAMESPACE = N;
exports.HTTP_RESOLVE = Ye;
exports.INPUT_EVENTS = Sr;
exports.PLATFORM_AUTO = Yt;
exports.PolyfillKeys = At;
exports.PolyfillMap = yt;
exports.RESOLVE_EXTENSIONS = Mt;
exports.RE_NON_SCOPED = Bt;
exports.RE_SCOPED = Ft;
exports.STATE = _;
exports.VIRTUAL_FILESYSTEM_NAMESPACE = le;
exports.VIRTUAL_FS = Vt;
exports.ansi = tt;
exports.bail = b;
exports.base64 = Qr;
exports.brotli = Is;
exports.build = us;
exports.bytes = Z;
exports.debounce = vr;
exports.decode = ue;
exports.deepAssign = q;
exports.deepDiff = es;
exports.deepEqual = Je;
exports.denoflate = xs;
exports.encode = ze;
exports.fetchAssets = Ht;
exports.fetchPkg = Ve;
exports.formatBytes = Z;
exports.getCDNOrigin = Et;
exports.getCDNStyle = Fe;
exports.getCDNUrl = T;
exports.getESBUILD = cs;
exports.getFile = Zt;
exports.getPackage = ct;
exports.getPackageVersions = ks;
exports.getPackages = Mr;
exports.getPureImportPath = $t;
exports.getRegistryURL = te;
exports.getRequest = J;
exports.getResolvedPackage = Ur;
exports.getResolvedPath = Ke;
exports.getSize = Rr;
exports.htmlEscape = os;
exports.inferLoader = We;
exports.init = st;
exports.isAlias = Ze;
exports.isExternal = vt;
exports.isObject = C;
exports.isPrimitive = Jt;
exports.isValidKey = Qt;
exports.legacy = zt;
exports.loop = P;
exports.lz4 = Ds;
exports.lzstring = fs;
exports.newRequest = _e;
exports.openCache = _t;
exports.parseConfig = Ir;
exports.parsePackageName = Q;
exports.parseShareQuery = Cr;
exports.parseTreeshakeExports = hs;
exports.path = wr;
exports.prettyBytes = Z;
exports.render = tt;
exports.resolveExports = Ut;
exports.resolveImports = Gt;
exports.resolveVersion = Cs;
exports.semver = jr;
exports.setFile = Kt;
exports.toLocaleString = ke;
exports.toName = ge;
//# sourceMappingURL=index.cjs.map
