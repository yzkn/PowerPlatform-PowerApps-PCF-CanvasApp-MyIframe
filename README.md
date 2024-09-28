# MyJS

Power Apps キャンバスアプリに iframe （インラインフレーム）を埋め込むためのコードコンポーネント

---

## Original

- [IFRAME コンポーネント](https://learn.microsoft.com/ja-jp/power-apps/developer/component-framework/sample-controls/iframe-control)
  - [microsoft/PowerApps-Samples](https://github.com/microsoft/PowerApps-Samples)
    - [IFrameControl](https://github.com/microsoft/PowerApps-Samples/tree/master/component-framework/IFrameControl)

## build

```powershell
npm install
npm install --save-dev typescript@4
npm upgrade

npm run build
npm start watch
```

## Packaging

developer command promptで実行

```powershell
mkdir MyIframeSolution
cd .\MyIframeSolution\
pac solution init --publisher-name YA --publisher-prefix ya
pac solution add-reference --path ..\
```

マネージドソリューションとして作成する場合は以下のコメントを解除

```xml
  <!-- Solution Packager overrides, un-comment to use: SolutionPackagerType (Managed, Unmanaged, Both) -->
  <PropertyGroup>
    <SolutionPackageType>Managed</SolutionPackageType>
  </PropertyGroup>
  <!-- -->
```

```powershell
# デバッグ構成で作成する場合
msbuild /t:build /restore

# マネージドソリューションとしてリリース構成で作成する場合
msbuild /t:build /restore /p:configuration=Release
```

---

Copyright (c) 2023 YA-androidapp(https://github.com/yzkn) All rights reserved.
