import { Theme } from "./theme";

export const getValidityStyles = (theme: Theme) => ({
    'sl-input, sl-select, sl-checkbox': {
        display: 'block',
        marginBottom: 'var(--sl-spacing-medium)'
    },

    // User invalid styles
    'sl-input.user-error::part(base), sl-select.user-error::part(combobox), sl-checkbox.user-error::part(control)': {
        borderColor: 'var(--sl-color-danger-600)'
    },

    '.user-error::part(form-control-label), .user-error::part(form-control-help-text), sl-checkbox.user-error::part(label)': {
        color: 'var(--sl-color-danger-700)'
    },

    'sl-checkbox.user-error::part(control)': {
        outline: 'none'
    },

    'sl-input:focus-within.user-error::part(base), sl-select:focus-within.user-error::part(combobox), sl-checkbox:focus-within.user-error::part(control)': {
        borderColor: 'var(--sl-color-danger-600)',
        boxShadow: '0 0 0 var(--sl-focus-ring-width) var(--sl-color-danger-300)'
    },

    // User valid styles
    'sl-input.user-valid::part(base), sl-select.user-valid::part(combobox), sl-checkbox.user-valid::part(control)': {
        borderColor: 'var(--sl-color-success-600)'
    },

    '.user-valid::part(form-control-label), .user-valid::part(form-control-help-text), sl-checkbox.user-valid::part(label)': {
        color: 'var(--sl-color-success-700)'
    },

    'sl-checkbox.user-valid::part(control)': {
        backgroundColor: 'var(--sl-color-success-600)',
        outline: 'none'
    },

    'sl-input:focus-within.user-valid::part(base), sl-select:focus-within.user-valid::part(combobox), sl-checkbox:focus-within.user-valid::part(control)': {
        borderColor: 'var(--sl-color-success-600)',
        boxShadow: '0 0 0 var(--sl-focus-ring-width) var(--sl-color-success-300)'
    }
});