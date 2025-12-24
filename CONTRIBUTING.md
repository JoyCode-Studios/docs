# Contributing to JoyCode Documentation

Thank you for your interest in contributing to **JoyCode Documentation**!  
This project powers documentation across the entire **JoyCode Studios** ecosystem, and contributions help keep it clear, consistent, and accessible for everyone.

Whether you're fixing a typo, improving layout, adding components, or refining accessibility, all contributions are welcome.

---

## 🧭 How to Contribute

### 1. Fork the repository

Click **Fork** at the top of the page to create your own copy of the project.

### 2. Create a feature branch

Use a clear, descriptive branch name:

```sh
git checkout -b improve-sidebar-spacing
```

### 3. Make your changes

You can contribute to:
- documentation layout
- CSS styling (There isn't much CSS)
- accessibility improvements
- JavaScript enhancements (there isn't much JavaScript)
- new reusable components
- bug fixes
- content structure
- performance improvements
- The README.md
Please keep changes focused and scoped to a single purpose. If you wish to contribute to multiple purposes, please do this seperately. You may never update this `CONTRIBUTING.md`.

### 4. Commit with a clear message
Make sure your commits have a clear message:
```sh
git commit -m "Improve dark mode contrast for sidebar links"
```

### 5. Open a Pull Request

Submit your PR to the main branch.
Include:
- a short summary of the change
- screenshots if UI changes are involved
- any relevant context
A maintainer will review it as soon as possible. (Currently only one.)

### 6. Coding guidelines

HTML
- Use semantic elements where possible.
- Keep indentation consistent (2 or 4 spaces — match the file).
- Avoid inline styles unless necessary for examples.

CSS
- Use CSS variables (--var-name) for colors, spacing, and theme values.
- Keep light/dark mode changes inside the .dark class.
- Prefer readability over cleverness.

JavaScript
- Keep scripts lightweight and dependency‑free.
- Avoid framework‑specific code — this project must stay universal.
- Use clear, descriptive variable names.

### 7. Design priinciples

Design Principles
JoyCode Documentation follows these principles:
- Clarity — content should be readable and easy to navigate.
- Consistency — all JoyCode projects should feel unified.
- Simplicity — minimal dependencies, minimal complexity.
- Accessibility — readable contrast, keyboard‑friendly navigation.
- Scalability — layouts should work for small and large docs.
If your contribution improves one of these areas, it’s welcome, otherwise, please submit a pull request, and maintainers will choose to merge or not.

### 8. Testing Your Changes
Before submitting a PR:
- Open the docs in a browser
- Test both light and dark themes
- Check mobile responsiveness
- Ensure the sidebar and navigation behave correctly
- Verify no layout shifts or broken links
This helps keep the documentation stable across all JoyCode projects.

---

### License

By contributing, you agree that your contributions will be licensed under the MIT License, the same license used by this project.
This ensures the entire JoyCode ecosystem remains open, flexible, and developer‑friendly.

---

### Questions or ideas?
If you have suggestions, feature ideas, or want to discuss a change before implementing it, feel free to open a Discussion or Issue.
We’re excited to build a clean, unified documentation system together.
