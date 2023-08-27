# Portfolio Shared Data Repository

This repository contains shared data, including TypeScript types and other data files, that are used by both the backend and frontend repositories in my portfolio app.

**Note: This shared data repository is intended for use within my portfolio app and is not meant for public use or distribution.**

## Purpose

The purpose of this repository is to centralize the shared data that is required by multiple repositories within my portfolio app. By having a separate shared data repository, I can ensure consistency and avoid duplication of code and data.

## Contributing

Contributions to the shared data repository are not accepted as this repository is for personal use only.

## License

This repository is not licensed for public use.

Add the shared data repository as a submodule:

```bash
git submodule add https://github.com/AHMED-5G/portfolio-shared-data shared-data
```

to import from as package like

`import {IUser} from 'shared-data';`

in tsconfig.json:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "shared-data": ["./shared-data"]
    }
  }
}
```
