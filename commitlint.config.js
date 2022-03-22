module.exports = {
  extends: ["@commitlint/config-conventional"],
  // 0: 禁止这个规则，1: 代表警告，2: 代表错误
  // always | never , never 不能。always 必须
  // value
  rules: {
    "type-empty": [2, "never"],
    "scope-enum": [2, "always", ["公共模块"]],
  },
  prompt: {
    settings: {
      enableMultipleScopes: true, // scope 多个切换
      scopeEnumSeparator: ",",
    },
    messages: {
      skip: ":skip",
      max: "最大长度 %d",
      min: "最小长度 %d",
      emptyWarning: "不能为空",
      upperLimitWarning: "超过最大限制",
      lowerLimitWarning: "低于最小限制",
    },
    questions: {
      type: {
        description: "选择提交类型:",
        enum: {
          feat: {
            description: "功能添加",
            title: "功能",
            emoji: "✨",
          },
          fix: {
            description: "Bug修复或功能优化",
            title: "修复Bug",
            emoji: "🐛",
          },
          docs: {
            description: "文档更新",
            title: "文档",
            emoji: "📚",
          },
          style: {
            description: "样式修改",
            title: "Styles",
            emoji: "💎",
          },
          refactor: {
            description: "代码重构",
            title: "代码重构",
            emoji: "📦",
          },
          perf: {
            description: "性能优化",
            title: "性能优化",
            emoji: "🚀",
          },
          test: {
            description: "测试",
            title: "测试",
            emoji: "🚨",
          },
          build: {
            description: "构建",
            title: "构建",
            emoji: "🛠",
          },
          ci: {
            description: "持续集成",
            title: "持续集成",
            emoji: "⚙️",
          },
          revert: {
            description: "回退版本",
            title: "回退",
            emoji: "🗑",
          },
          chore: {
            description: "其他修改",
            title: "其他修改",
            emoji: "♻️",
          },
        },
      },
      scope: {
        description: "scope",
      },
      subject: {
        description: "描述提交内容",
      },
      body: {
        description: "提供详细的提交描述",
      },
      isBreaking: {
        description: "存在突破性改变？",
      },
      breakingBody: {
        description: "提供详细的改变内容描述",
      },
      breaking: {
        description: "描述改变内容",
      },
      isIssueAffected: {
        description: "是否关联某个 issue ?",
      },
      issuesBody: {
        description: "描述 issue 内容",
      },
      issues: {
        description: '添加 issue 索引(e.g. "fix #123", "re #123".)',
      },
    },
  },
};
