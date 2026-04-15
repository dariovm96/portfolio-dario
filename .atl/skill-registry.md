# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| When creating a GitHub issue, reporting a bug, or requesting a feature. | issue-creation | C:\Users\daril\.config\opencode\skills\issue-creation\SKILL.md |
| When creating a pull request, opening a PR, or preparing changes for review. | branch-pr | C:\Users\daril\.config\opencode\skills\branch-pr\SKILL.md |
| When user says "judgment day", "judgment-day", "review adversarial", "dual review", "doble review", "juzgar", "que lo juzguen". | judgment-day | C:\Users\daril\.config\opencode\skills\judgment-day\SKILL.md |
| When user asks to create a new skill, add agent instructions, or document patterns for AI. | skill-creator | C:\Users\daril\.config\opencode\skills\skill-creator\SKILL.md |
| When writing Go tests, using teatest, or adding test coverage. | go-testing | C:\Users\daril\.config\opencode\skills\go-testing\SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### issue-creation
- Always use GitHub issue templates; blank issues are not allowed.
- Search for duplicates before opening a new issue.
- New issues get `status:needs-review`; PR work starts only after maintainer adds `status:approved`.
- Route questions to Discussions, not Issues.
- Include all required template fields (pre-flight, repro/problem details, environment).

### branch-pr
- Every PR must link an approved issue (`Closes/Fixes/Resolves #N`) and that issue must have `status:approved`.
- Add exactly one `type:*` label matching PR type.
- Branch names must match `type/description` with lowercase safe chars.
- Use conventional commits and never include AI attribution trailers.
- Ensure required checks pass (issue linkage, approved label, type label, shellcheck) before merge.

### judgment-day
- Resolve and inject project standards before launching judges.
- Run two blind judges in parallel; orchestrator only synthesizes results.
- Classify warnings as real vs theoretical; theoretical warnings are info-only.
- Fix only confirmed critical/real warnings, then re-judge according to convergence rules.
- Do not declare APPROVED until terminal criteria are met.

### skill-creator
- Create skills only for repeatable, non-trivial workflows with clear agent guidance value.
- Follow `skills/{name}/SKILL.md` structure with valid frontmatter and trigger text.
- Keep content focused on critical patterns, decisions, and executable commands.
- Prefer local references/assets over duplicating long docs or linking external URLs in references.
- Register new skills in project conventions/index so agents can discover them.

### go-testing
- Prefer table-driven tests for logic with multiple scenarios.
- Test Bubbletea by validating model state transitions with `Update` and key messages.
- Use `teatest` for interactive TUI flows; assert final model state.
- Use golden files for view regression and update intentionally.
- Cover success + error paths, use `t.TempDir()` for filesystem isolation.

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| — | — | No project-level convention files found (`agents.md`, `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `GEMINI.md`, `copilot-instructions.md`). |

Read the convention files listed above for project-specific patterns and rules. All referenced paths have been extracted — no need to read index files to discover more.
