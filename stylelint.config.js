import propertyGroups from 'stylelint-config-recess-order/groups'

export default {
  extends: [
    'stylelint-config-standard-scss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'selector-class-pattern': null,
    'comment-no-empty': null,
    'scss/comment-no-empty': null,
    'at-rule-empty-line-before': null,
    'scss/dollar-variable-empty-line-before': null,
    'order/properties-order': propertyGroups.map((group) => ({
      ...group,
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
    })),
  }
}