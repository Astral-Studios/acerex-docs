# Acerex Docs — Contributing Guide

Thanks for helping improve the Acerex Wiki! This guide walks you through how to suggest edits or add new content. You don't need to be a developer, if you can edit a text file, you can contribute.

---

# How the Wiki Works

All wiki pages live in the `src/` folder of this repository as `.md` (Markdown) files. When an edit is approved and merged by a Manager, the site automatically updates within minutes.

---

# Step-by-Step: How to Contribute

## Step 1 — Fork the Repository

A fork is your own personal copy of the repo where you can make changes freely without affecting the live site.

1. Click the **Fork** button in the top-right corner of this page
2. Click **Create fork**
3. You now have your own copy at `github.com/YOUR-USERNAME/acerex-docs`

---

## Step 2 — Find the Page You Want to Edit

Navigate to `src/routes/` in your forked repo. The folder structure matches the URL structure of the wiki:

```
src/routes/
├── acerex-factions/
│   ├── getting-started/
│   │   ├── introduction/+page.md   ← /acerex-factions/getting-started/introduction/
│   │   ├── rules/+page.md          ← /acerex-factions/getting-started/rules/
│   │   └── commands/+page.md
│   ├── gameplay/
│   └── economy/
└── cobblecore-skyblock/
    └── getting-started/
```

Every page is a `+page.md` file inside its own folder.

---

## Step 3 — Make Your Edits

1. Click the file you want to edit
2. Click the **pencil icon** (✏️) in the top-right of the file view
3. Make your changes in the editor
4. Pages use standard **Markdown** formatting:

```md
# Section Heading
## Sub Heading

Regular paragraph text goes here.

- Bullet point one
- Bullet point two

**Bold text**, *italic text*

> This is a blockquote

:::tip
This is a tip box.
:::
```

5. When done, scroll down and click **Commit changes**
6. Add a short description of what you changed (e.g. `Update rules page — added raiding cooldown info`)
7. Click **Commit changes** to save

---

## Step 4 — Submit a Pull Request (PR)

A Pull Request is how you send your changes to us for review.

1. Go back to **your forked repo** (`github.com/YOUR-USERNAME/acerex-docs`)
2. You should see a banner saying **"This branch is X commits ahead"** — click **Contribute → Open pull request**
3. Give your PR a clear title, e.g. `Update factions rules page`
4. In the description, briefly explain what you changed and why
5. Click **Create pull request**

That's it! Your changes are now submitted for review.

---

## Step 5 — Review & Approval

Once your PR is submitted:

- An Acerex Manager will review your changes
- They may leave comments asking for small adjustments
- If changes are requested, go back to your fork, edit the file again, and commit — the PR updates automatically
- Once approved, your PR will show a ✅ **Approved** status

---

## Step 6 — Admin Merge

After approval, an Acerex Manager will **merge** your pull request into the main branch. The wiki will automatically rebuild and your changes will go live within a few minutes.

You'll receive a GitHub notification when this happens. 🎉

---

# Markdown Quick Reference

| Format | Syntax |
|---|---|
| **Bold** | `**bold**` |
| *Italic* | `*italic*` |
| Heading | `# Heading` |
| Bullet list | `- item` |
| Numbered list | `1. item` |
| Link | `[text](url)` |
| Code | `` `code` `` |
| Code block | ` ```language ` |
| Blockquote | `> text` |
| Horizontal rule | `---` |

For a full reference, see the [Markdown Guide](https://www.markdownguide.org/basic-syntax/).

---

## FAQ

**Do I need to install anything?**
No. Everything can be done directly in your browser on GitHub.

**Will my changes go live immediately?**
No — all changes go through review first. An admin must approve and merge your PR before anything updates on the live site.

**What if I make a mistake?**
No problem. Reviewers will catch it during the review stage, or you can edit your PR before it's merged.

**Can I add a completely new page?**
Yes! Create a new folder with the page's name inside the right section, add a `+page.md` file inside it, and submit a PR. Tag an admin in the PR description so they know a new page is being added.

**Who do I contact if I'm stuck?**
Reach out in our [Discord server](https://discord.gg/EaUpVM2fzu) and someone will help you out.

---

*Maintained by the Acerex Group Management Team.*
