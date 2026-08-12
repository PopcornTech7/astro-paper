import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://你的项目名.pages.dev/",   // 先留着，部署后换成真实地址
    title: "Cloud's Blog",
    description: "我的个人分享博客",
    author: "Cloud",
    profile: "https://你的主页（或留空字符串）",
    ogImage: "default-og.jpg",
    lang: "zh-CN",            // 改成中文
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: { perPage: 5, perIndex: 5, scheduledPostMargin: 15 * 60 * 1000 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/PopcornTech7/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/PopcornTech7" },
    { name: "mail",   url: "mailto:cloudlist@163.com" },
    // 用不到的社交账号整行删掉即可，比如下面这行：
    // { name: "x", url: "https://x.com/username" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
