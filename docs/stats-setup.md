# Enable private commit statistics

The profile uses a locally generated activity card. Its initial card is marked **public**. After the token below is configured, GitHub Actions replaces it with an all-time card that can include commits from private repositories.

1. Create a [personal access token (classic)](https://github.com/settings/tokens/new) for **dinhgia2106** with the `repo` and `read:user` scopes, as required by [GitHub Readme Stats Action](https://github.com/stats-organization/github-readme-stats-action#inputs). Authorize organization SSO if any of your repositories require it.
2. Open [this repository's Actions secrets](https://github.com/dinhgia2106/dinhgia2106/settings/secrets/actions) and save the token as **PROFILE_STATS_TOKEN**.
3. After merging this change, open [Actions](https://github.com/dinhgia2106/dinhgia2106/actions), select **Update GitHub statistics**, and click **Run workflow**. It also runs daily at 07:23 Vietnam time.
4. Confirm the workflow succeeds and the card title changes from **GitHub activity (public)** to **GitHub activity**.

The workflow passes the token directly to the card generator on the GitHub Actions runner. It never puts the token in the README or a public image URL. The normal repository `GITHUB_TOKEN` writes the generated SVG; the personal token reads statistics. Only the aggregate card is committed, with no private repository names or commit contents.

`include_all_commits=true` removes the one-year limit; private repositories must be accessible to the token to be counted. Commit totals follow GitHub's indexed commit search, rather than counting every commit on every local or unmerged branch. Organization policies can restrict token access.

If the token is missing, expired, or revoked, the workflow fails and preserves the last valid card. The language card remains based on public repositories and continues to exclude Jupyter Notebook.
