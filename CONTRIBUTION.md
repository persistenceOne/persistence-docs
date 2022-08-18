# Contribution
These are etiquetts for contributing to the documentation related to persistence chain and products.

1. For requesting or adding a new documentation consider the following things:
    - If a new documentation is requested, then raise an issue on this repo. This will provide a good platform for discussion, it can also be resolved easily if an existing resource (blog or otherwise exists) can help you.
    - If you want to change an already existing docuentation, please check the issues again to see if it is being addressed or has been closed before.
    - If the documentation in concern belongs to another repository then consider the above points and reference the issue on the said repository in your [Pull request](#pull-request).
    - If you are having a discussion on an issue, please consider researching other related documentations like [Cosmos-sdk](https://docs.cosmos.network/) or [CosmWasm](https://docs.cosmwasm.com/docs/1.0/) to see if you can find a related problem or solutions.

2. After a thoughtfull discussion, in case a change is required you will have to follow the [steps](#pull-request) for raising a pull request.

3. Use git to checkout form the PR you have raised. See how to do it [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally).

     >**NOTE:** You should have a look at the existing PRs to find similar labeled PR or with same scope.

4. Consider looking at the [best practices](#best-practices) before you begin adding or editing the documentation.

5. Use appropriate commits for your changes.

    >**NOTE:** One PR should only address a single issue.

6. Once all the changes have been made change the PR from `Draft` to `Ready for Review`.

7. Before merging to `master` you can have a look at the live gitbook preview. Use [gitbook checks](https://docs.gitbook.com/integrations/git-sync/github-pull-request-preview#how-to-access-preview-links) for this, after all the commits have been made.

## Best Practices

* Check the spelling and grammar, even if you have to copy and paste from an external source.
* Use simple sentences. Easy-to-read sentences mean the reader can quickly use the guidance you share.
* Try to express your thoughts in a concise and clean way.
* Don't abuse `code` format when writing in plain English.
* Follow Google developer documentation [style guide](https://developers.google.com/style).
* Check the meaning of words in Microsoft's [A-Z word list and term collections](https://docs.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/accessibility-terms) (use the search input!).
* RFC keywords should be used in technical documents (uppercase) and we recommend to use them in user documentation (lowercase). The RFC keywords are: "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL. They are to be interpreted as described in [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).

## Technical Writing Course

Google provides a free [course](https://developers.google.com/tech-writing/overview) for technical writing.
## Pull Request Template

- **Issue:** This contains a reference to the issue that this PR will close. These issues can be from other repos or from this repo itself.
- **Type**: Mention the appropriate *Type* of change, with additional labels if required.

    - **Add Requests**: Use only for adding new Documentation and Resources to the docs.

    - **Typos**: Use for highlighting typos.

    - **Bugs**: Use this to mention any issue related to any persistence product/repository.

- **Overview**: Give a description if required, or use this to highlight issues form other repos with brief description for requirements.

- **Checks**
    - [ ] included the correct `label` in the PR Type
    - [ ] targeted the correct issue
    - [ ] provided a link to the relevant issue or specification
    - [ ] followed the [Best Practices](#best-practices)
    - [ ] reviewed "Files changed" and left comments if necessary
    - [ ] confirmed all CI checks have passed for gitbook
- **Reviewers Checklist**
    - [ ] confirmed the correct `label` in the PR Type
    - [ ] confirmed all author checklist items have been addressed 
    - [ ] confirmed that this PR only changes documentation
    - [ ] reviewed content for consistency
    - [ ] reviewed content for thoroughness
    - [ ] reviewed content for spelling and grammar
    - [ ] tested instructions (if applicable) 
