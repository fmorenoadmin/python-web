import reflex as rx

#styles
import fmoreno.styles.styles as styles

def link_button(title: str, subtitle: str, url: str, button_style: dict = None) -> rx.Component:
    button_style = button_style or {}
    button_style.update({
        "width": "100%",
        "height": "100%",
        "diaplay": "block",
        "border_radius": styles.Size.DEFAULT.value,
    })

    button = rx.button(
        rx.hstack(
            rx.icon(
                tag="arrow_right",
                width=styles.Size.BIG.value,
                align_items="start",
            ),
            rx.vstack(
                rx.text(title, style=styles.button_title_style),
                rx.text(subtitle, style=styles.button_body_style),
                align_items="start",
            ),
            align_items="start",
        ),
        #**button_style
        align_items="start",
    )

    return rx.link(
        button,
        href=url,
        is_external="true",
        **button_style,
        align_items="start",
    )
