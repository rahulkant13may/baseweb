import {Tag, KIND, VARIANT, SIZE} from 'baseui/tag';
import {PropTypes} from 'react-view';
import {TConfig} from '../types';

const tagProps = require('!!extract-react-types-loader!../../../../src/tag/tag.js');

const TagConfig: TConfig = {
  componentName: 'Tag',
  imports: {
    'baseui/tag': {
      named: ['Tag'],
    },
  },
  scope: {
    Tag,
    KIND,
    VARIANT,
  },
  theme: [
    'tagSolidRampUnit',
    'tagSolidHoverRampUnit',
    'tagSolidActiveRampUnit',
    'tagSolidDisabledRampUnit',
    'tagSolidFontRampUnit',
    'tagSolidFontHoverRampUnit',
    'tagLightRampUnit',
    'tagLightHoverRampUnit',
    'tagLightActiveRampUnit',
    'tagLightDisabledRampUnit',
    'tagLightFontRampUnit',
    'tagLightFontHoverRampUnit',
    'tagOutlinedRampUnit',
    'tagOutlinedHoverRampUnit',
    'tagOutlinedActiveRampUnit',
    'tagOutlinedDisabledRampUnit',
    'tagOutlinedFontRampUnit',
    'tagOutlinedFontHoverRampUnit',
    'tagFontDisabledRampUnit',
    'tagNeutralSolidBackground',
    'tagNeutralSolidHover',
    'tagNeutralSolidActive',
    'tagNeutralSolidDisabled',
    'tagNeutralSolidFont',
    'tagNeutralSolidFontHover',
    'tagNeutralLightBackground',
    'tagNeutralLightHover',
    'tagNeutralLightActive',
    'tagNeutralLightDisabled',
    'tagNeutralLightFont',
    'tagNeutralLightFontHover',
    'tagNeutralOutlinedBackground',
    'tagNeutralOutlinedHover',
    'tagNeutralOutlinedActive',
    'tagNeutralOutlinedDisabled',
    'tagNeutralOutlinedFont',
    'tagNeutralOutlinedFontHover',
    'tagNeutralFontDisabled',
    'tagPrimarySolidBackground',
    'tagPrimarySolidHover',
    'tagPrimarySolidActive',
    'tagPrimarySolidDisabled',
    'tagPrimarySolidFont',
    'tagPrimarySolidFontHover',
    'tagPrimaryLightBackground',
    'tagPrimaryLightHover',
    'tagPrimaryLightActive',
    'tagPrimaryLightDisabled',
    'tagPrimaryLightFont',
    'tagPrimaryLightFontHover',
    'tagPrimaryOutlinedBackground',
    'tagPrimaryOutlinedHover',
    'tagPrimaryOutlinedActive',
    'tagPrimaryOutlinedDisabled',
    'tagPrimaryOutlinedFont',
    'tagPrimaryOutlinedFontHover',
    'tagPrimaryFontDisabled',
    'tagAccentSolidBackground',
    'tagAccentSolidHover',
    'tagAccentSolidActive',
    'tagAccentSolidDisabled',
    'tagAccentSolidFont',
    'tagAccentSolidFontHover',
    'tagAccentLightBackground',
    'tagAccentLightHover',
    'tagAccentLightActive',
    'tagAccentLightDisabled',
    'tagAccentLightFont',
    'tagAccentLightFontHover',
    'tagAccentOutlinedBackground',
    'tagAccentOutlinedHover',
    'tagAccentOutlinedActive',
    'tagAccentOutlinedDisabled',
    'tagAccentOutlinedFont',
    'tagAccentOutlinedFontHover',
    'tagAccentFontDisabled',
    'tagPositiveSolidBackground',
    'tagPositiveSolidHover',
    'tagPositiveSolidActive',
    'tagPositiveSolidDisabled',
    'tagPositiveSolidFont',
    'tagPositiveSolidFontHover',
    'tagPositiveLightBackground',
    'tagPositiveLightHover',
    'tagPositiveLightActive',
    'tagPositiveLightDisabled',
    'tagPositiveLightFont',
    'tagPositiveLightFontHover',
    'tagPositiveOutlinedBackground',
    'tagPositiveOutlinedHover',
    'tagPositiveOutlinedActive',
    'tagPositiveOutlinedDisabled',
    'tagPositiveOutlinedFont',
    'tagPositiveOutlinedFontHover',
    'tagPositiveFontDisabled',
    'tagWarningSolidBackground',
    'tagWarningSolidHover',
    'tagWarningSolidActive',
    'tagWarningSolidDisabled',
    'tagWarningSolidFont',
    'tagWarningSolidFontHover',
    'tagWarningLightBackground',
    'tagWarningLightHover',
    'tagWarningLightActive',
    'tagWarningLightDisabled',
    'tagWarningLightFont',
    'tagWarningLightFontHover',
    'tagWarningOutlinedBackground',
    'tagWarningOutlinedHover',
    'tagWarningOutlinedActive',
    'tagWarningOutlinedDisabled',
    'tagWarningOutlinedFont',
    'tagWarningOutlinedFontHover',
    'tagWarningFontDisabled',
    'tagNegativeSolidBackground',
    'tagNegativeSolidHover',
    'tagNegativeSolidActive',
    'tagNegativeSolidDisabled',
    'tagNegativeSolidFont',
    'tagNegativeSolidFontHover',
    'tagNegativeLightBackground',
    'tagNegativeLightHover',
    'tagNegativeLightActive',
    'tagNegativeLightDisabled',
    'tagNegativeLightFont',
    'tagNegativeLightFontHover',
    'tagNegativeOutlinedBackground',
    'tagNegativeOutlinedHover',
    'tagNegativeOutlinedActive',
    'tagNegativeOutlinedDisabled',
    'tagNegativeOutlinedFont',
    'tagNegativeOutlinedFontHover',
    'tagNegativeFontDisabled',
  ],
  props: {
    children: {
      value: 'this is a tag',
      type: PropTypes.ReactNode,
      description: `Visible label.`,
    },
    onClick: {
      value: undefined,
      placeholder: '() => alert("click")',
      type: PropTypes.Function,
      description: `onClick handler for the tag. Passing an onClick handler also makes the tag clickable.`,
    },
    onActionClick: {
      value: undefined,
      placeholder: '() => alert("click")',
      type: PropTypes.Function,
      description: `onClick handler for the action button element.`,
    },
    closeable: {
      value: true,
      defaultValue: true,
      type: PropTypes.Boolean,
      description: `Include or exclude the "x" button and click action.`,
    },
    kind: {
      value: 'KIND.primary',
      defaultValue: 'KIND.primary',
      options: KIND,
      type: PropTypes.Enum,
      description:
        'Defines tags look by purpose. Set it to one of KIND[key] values. Defaults to KIND.primary.',
      imports: {
        'baseui/tag': {
          named: ['KIND'],
        },
      },
    },
    color: {
      value: undefined,
      type: PropTypes.String,
      description: `The color theme to be applied to a Tag. To make this custom color active, you have to set kind to custom.`,
    },
    variant: {
      value: 'VARIANT.light',
      defaultValue: 'VARIANT.light',
      options: VARIANT,
      type: PropTypes.Enum,
      description:
        'Defines tags look. Set it to one of VARIANT[key] values. Defaults to VARIANT.light.',
      imports: {
        'baseui/tag': {
          named: ['VARIANT'],
        },
      },
    },
    size: {
      value: 'SIZE.small',
      defaultValue: 'SIZE.small',
      options: SIZE,
      type: PropTypes.Enum,
      description: 'Determines how large the Tag will be.',
      imports: {
        'baseui/tag': {
          named: ['SIZE'],
        },
      },
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: `Disable the tag from being changed.`,
    },
    title: {
      value: undefined,
      type: PropTypes.String,
      description: `Text to display in native OS tooltip on long hover.`,
      hidden: true,
    },
    onKeyDown: {
      value: undefined,
      placeholder: '() => alert("click")',
      type: PropTypes.Function,
      description: `onkeydown handler for the tag.`,
      hidden: true,
    },
    onActionKeyDown: {
      value: undefined,
      placeholder: '() => alert("click")',
      type: PropTypes.Function,
      description: `keydown handler for the action button element.`,
      hidden: true,
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Action', 'ActionIcon', 'Text'],
        sharedProps: {
          $kind: 'kind',
          $variant: 'variant',
          $closeable: 'closeable',
          $isActive: {
            type: PropTypes.Boolean,
            description: 'Is tag active.',
          },
          $disabled: 'disabled',
          $isHovered: 'isHovered',
          $isFocused: 'isFocused',
        },
      },
    },
  },
  mapTokensToProps: {
    Tag: tagProps,
  },
};

export default TagConfig;
