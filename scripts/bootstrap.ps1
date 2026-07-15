# bootstrap.ps1
# Initializes the devpilot-ai/origin repository with labels, milestones, and a project.
# Run:
#   .\bootstrap.ps1

$ErrorActionPreference = "Stop"

$Repo = "devpilot-ai/origin"
$Owner = "devpilot-ai"
$ProjectTitle = "Origin Product Development"

Write-Host "Bootstrapping $Repo..."

$labels = @(
    @{Name="type:feature";Color="0E8A16";Desc="New product functionality"},
    @{Name="type:infra";Color="5319E7";Desc="Infrastructure / DevOps"},
    @{Name="type:docs";Color="1D76DB";Desc="Documentation"},
    @{Name="type:chore";Color="C5DEF5";Desc="Maintenance"},
    @{Name="area:frontend";Color="FBCA04";Desc="Frontend"},
    @{Name="area:backend";Color="FBCA04";Desc="Backend"},
    @{Name="area:auth";Color="FBCA04";Desc="Authentication"},
    @{Name="area:github";Color="FBCA04";Desc="GitHub Integration"},
    @{Name="area:ai";Color="FBCA04";Desc="AI"},
    @{Name="area:devops";Color="FBCA04";Desc="DevOps"},
    @{Name="priority:p0";Color="B60205";Desc="Critical"},
    @{Name="priority:p1";Color="D93F0B";Desc="High"}
)

foreach($l in $labels){
    gh label create $l.Name -R $Repo --color $l.Color --description $l.Desc 2>$null
}

$milestones = @(
"v0.1 Foundation",
"v0.2 Authentication",
"v0.3 Dashboard",
"v0.4 GitHub",
"v0.5 AI",
"v0.6 Deployment",
"v1.0 Beta"
)

foreach($m in $milestones){
    gh api "repos/$Repo/milestones" -X POST -f title="$m" 2>$null
}

gh project create --owner $Owner --title $ProjectTitle 2>$null

$issues = @(
@{Title="Initialize React app shell";Body="Create the initial React/Vite application shell.";Labels="type:feature,area:frontend,priority:p0"},
@{Title="Initialize FastAPI service";Body="Create backend skeleton.";Labels="type:feature,area:backend,priority:p0"},
@{Title="Add Dockerfiles";Body="Dockerize frontend and backend.";Labels="type:infra,area:devops,priority:p0"},
@{Title="Docker Compose";Body="Local development stack.";Labels="type:infra,area:devops,priority:p0"},
@{Title="Configure PostgreSQL";Body="Database foundation.";Labels="type:infra,area:backend,priority:p0"},
@{Title="Clerk authentication";Body="Frontend auth.";Labels="type:feature,area:auth,priority:p0"},
@{Title="Backend auth verification";Body="Verify Clerk tokens.";Labels="type:feature,area:auth,priority:p0"},
@{Title="Landing page MVP";Body="Initial marketing page.";Labels="type:feature,area:frontend,priority:p0"},
@{Title="Dashboard shell";Body="Create dashboard layout.";Labels="type:feature,area:frontend,priority:p0"},
@{Title="Dark mode";Body="Theme support.";Labels="type:feature,area:frontend,priority:p1"},
@{Title="Typed API client";Body="Frontend HTTP client.";Labels="type:feature,area:frontend,priority:p1"},
@{Title="Structured logging";Body="Logging baseline.";Labels="type:infra,area:devops,priority:p1"},
@{Title="Monitoring baseline";Body="Sentry integration.";Labels="type:infra,area:devops,priority:p1"},
@{Title="GitHub OAuth";Body="Connect GitHub account.";Labels="type:feature,area:github,priority:p0"},
@{Title="Repository listing";Body="Fetch repositories.";Labels="type:feature,area:github,priority:p0"},
@{Title="PR viewer";Body="View pull requests.";Labels="type:feature,area:github,priority:p1"},
@{Title="AI repository analysis";Body="Analyze repository.";Labels="type:feature,area:ai,priority:p0"},
@{Title="AI dashboard widget";Body="Display AI analysis.";Labels="type:feature,area:ai,priority:p0"},
@{Title="CI workflow";Body="Lint, test, build.";Labels="type:infra,area:devops,priority:p0"},
@{Title="Documentation generator";Body="Generate project docs.";Labels="type:docs,area:ai,priority:p1"}
)

foreach($i in $issues){
    gh issue create -R $Repo --title $i.Title --body $i.Body --label $i.Labels 2>$null
}

Write-Host "Bootstrap complete."
