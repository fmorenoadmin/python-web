"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config

import reflex as rx

#components
from fmoreno.componets.navbar import navbar
from fmoreno.views.header.header import header
from fmoreno.views.links.links import links
from fmoreno.componets.footer import footer

#styles
import fmoreno.styles.styles as styles

class State(rx.State):
    pass

def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=styles.Size.BIG.value,
            ),
        ),
        footer(),
    )

app = rx.App(
    style=styles.BASE_STYLE,
)
app.add_page(index)
