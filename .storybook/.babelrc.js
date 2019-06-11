return {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "forceAllTransforms": true,
        "corejs": 3,
        "targets": {
          "targets": {
            "ie": 11,
          },
        }
      }
    ]
  ],
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}