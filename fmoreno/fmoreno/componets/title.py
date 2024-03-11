import reflex as rx

#styles
import fmoreno.styles.styles as styles

def title(text: str) -> rx.Component:
    return rx.heading(
        text,
        size="4",
        style=styles.title_styles,
    )