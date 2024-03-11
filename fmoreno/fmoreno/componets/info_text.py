import reflex as rx

#importar compoents
from fmoreno.componets.link_icon import link_icon

#styles
from fmoreno.styles.styles import Size as Size
#from fmoreno.styles.styles import Size_p as Size_p

def info_text(progr: str, title: str, body: str) -> rx.Component:
    return rx.box(
        rx.chakra.span(
            f"{progr} ",
            color="red"
        ),
        rx.chakra.span(
            title,
            font_weigth="bold",
            color="blue",
        ),
        f" {body}",
        font_size=Size.MEDIUM.value,
    )