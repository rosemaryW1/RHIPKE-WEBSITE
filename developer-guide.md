# Contributing to RHIPKE Website

## Getting Started
1. Clone repository:
```bash
git clone https://github.com/rosemaryW1/RHIPKE-WEBSITE.git
cd RHIPKE-WEBSITE
npm install
```

## Branch Structure
- `main`: Production code
- `development`: Integration branch
- `feature/*`: Developer work

## Development Workflow
1. Get latest development code:
```bash
git checkout development
git pull origin development
```

2. Create feature branch:
```bash
git checkout -b feature/your-feature-name
```

3. Regular Development Tasks:
- Daily development branch pulls
- Regular commits
- Merge development into your feature branch

4. Push Feature:
```bash
git add .
git commit -m "Feature: description"
git push origin feature/your-feature-name
```

## Code Integration
1. After PR approval:
```bash
git checkout development
git pull origin development
git merge feature/your-feature-name
git push origin development
```

## Best Practices
- No direct commits to main
- Daily development branch pulls
- Clear commit messages
- Test before PR
- Document changes
- Report conflicts

## Project Structure
```
src/
├── components/    # UI components
├── pages/        # Routes
├── assets/       # Static files
├── styles/       # CSS
└── utils/        # Helpers
```