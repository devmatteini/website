export type MenuItem =
    | {
          type: "page"
          route: string
          label: string
      }
    | {
          type: "social"
          icon: string
          link: string
          label: string
      }

export const menuItems: readonly MenuItem[] = [
    {
        type: "page",
        route: "/",
        label: "/home",
    },
    {
        type: "page",
        route: "/blog",
        label: "/blog",
    },
    {
        type: "page",
        route: "/tags",
        label: "/tags",
    },
    {
        type: "social",
        icon: "github",
        link: "https://github.com/devmatteini/",
        label: "GitHub",
    },
]
