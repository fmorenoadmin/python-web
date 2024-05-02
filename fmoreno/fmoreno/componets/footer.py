import reflex as rx
import datetime

#styles
from fmoreno.styles.styles import Size as Size
from fmoreno.styles.styles import Size_p as Size_p

year = str(datetime.date.today().year)

def footer() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.hstack(
                rx.image(src="https://www.frankmorenoalburqueque.com/assets/images/ico490x458.webp", width="100px", height="auto"),
                align="center",
                margin_bottom=Size.BIG.value,
            ),
            rx.hstack(
                rx.text("Copyright © 2017-" + year),
                rx.link(
                    "Frank Moreno",
                    href="https://frankmorenoalburqueque.com/",
                    is_external="true",
                ),
                rx.text("Todos los derechos reservados."),
                align="baseline",
                margin_bottom=Size.BIG.value,
            ),
        ),
    )