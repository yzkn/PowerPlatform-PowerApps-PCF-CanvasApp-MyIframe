# MyJS

---

## Original

- [IFRAME コンポーネント](https://learn.microsoft.com/ja-jp/power-apps/developer/component-framework/sample-controls/iframe-control)
  - [microsoft/PowerApps-Samples](https://github.com/microsoft/PowerApps-Samples)
    - [IFrameControl](https://github.com/microsoft/PowerApps-Samples/tree/master/component-framework/IFrameControl)

## Packaging

developer command promptで実行

```powershell
mkdir Solutions
cd .\Solutions\
pac solution init --publisher-name YA --publisher-prefix ya
pac solution add-reference --path ..\

msbuild /t:build /restore
```

---

Copyright (c) 2023 YA-androidapp(https://github.com/yzkn) All rights reserved.
