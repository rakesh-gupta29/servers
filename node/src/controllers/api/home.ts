import { Request, Response } from "express";
class Home {
  public static index(req: Request, res: Response) {
    res.json({
      message: [
        {
          title: "dummy title for blog card",
          desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
          target: "https://www.blacksof.com",
        },
        {
          title: "dummy title for blog card",
          desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
          target: "https://www.blacksof.com",
        },
        {
          title: "dummy title for blog card",
          desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
          target: "https://www.blacksof.com",
        },
      ],
    });
  }
  public static caseStudy(req: Request, res: Response) {
    res.json({
      message: [
        {
          title: "dummy title for case study",
          desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
          target: "https://www.blacksof.com",
        },
        {
          title: "dummy title for case study",
          desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
          target: "https://www.blacksof.com",
        },
        {
          title: "dummy title for case study",
          desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
          target: "https://www.blacksof.com",
        },
      ],
    });
  }
}
export default Home;
