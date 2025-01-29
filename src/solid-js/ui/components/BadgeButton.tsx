import { Component, Match, Setter, Show, Switch } from 'solid-js';
import { addCss } from '~/shared/ui/theme';

const css = addCss({
  button: {
    // width: "34px",
    marginTop: '5px',
    marginRight: '5px',
  },
  badge: {
    position: 'absolute',
    top: '-2px',
    right: '-2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12px',
    height: '12px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '5px',
    backgroundColor: 'var(--sl-color-primary-50)',
    borderColor: 'var(--sl-color-primary-200)',
    '& > .text': {
      fontSize: '8px',
      color: 'var(--sl-color-primary-800)',
    },
  },
});

export const BadgeButton: Component<{
  isActive: boolean;
  size?: 'small' | 'medium' | 'large';
  buttonLabel: string | number;
  badgeLabel?: string | number;
  disabled?: boolean;
  onClick: () => void;
}> = (props) => {
  return (
    <sl-button
      prop:size={props.size || 'medium'}
      prop:variant={props.isActive ? 'primary' : 'default'}
      class={css.button}
      prop:disabled={props.disabled}
      onClick={props.onClick}
    >
      <span>{props.buttonLabel}</span>
      <Show when={props.badgeLabel}>
        <div class={css.badge}>
          <div class="text">{props.badgeLabel}</div>
        </div>
      </Show>
    </sl-button>
  );
};
