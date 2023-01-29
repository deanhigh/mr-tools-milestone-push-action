# Multirepo Tools - Milestone Push

Push milestones from a source repository to configured target list of repositories.

This is an action wrapper linked to [Multirepo-tools](https://github.com/deanhigh/mr-tools-lib)

## Usage

- Existing milestones with same name will be skipped.
- Token must have Issues read/write access for the repositories involved.

### Inputs

#### `repositories`

**Required** Comma delimited list of repositories to copy to.

#### `token`

**Required** Comma delimited list of repositories to copy to.

### Outputs

None at this point

### Example usage

```yaml
uses: actions/mr-tools-milestone-push@v1.1
with:
  repositories: 'owner/reponame-to-copy-to,org/org-repo-to-copy-to'
```
