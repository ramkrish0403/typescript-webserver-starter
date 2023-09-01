Settings precedence
Configurations can be overridden at multiple levels by the different setting scopes. In the following list, later scopes override earlier scopes:

Default settings - This scope represents the default unconfigured setting values.
User settings - Apply globally to all VS Code instances.
Remote settings - Apply to a remote machine opened by a user.
Workspace settings - Apply to the open folder or workspace.
Workspace Folder settings - Apply to a specific folder of a multi-root workspace.
Language-specific default settings - These are language-specific default values that can be contributed by extensions.
Language-specific user settings - Same as User settings, but specific to a language.
Language-specific remote settings - Same as Remote settings, but specific to a language.
Language-specific workspace settings - Same as Workspace settings, but specific to a language.
Language-specific workspace folder settings - Same as Workspace Folder settings, but specific to a language.
Policy settings - Set by the system administrator, these values always override other setting values.