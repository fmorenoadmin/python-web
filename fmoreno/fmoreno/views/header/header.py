import reflex as rx

#importar compoents
from fmoreno.componets.link_icon import link_icon
from fmoreno.componets.info_text import info_text

#styles
from fmoreno.styles.styles import Size_p as Size_p

def header() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.hstack(
                rx.avatar(src="https://www.frankmorenoalburqueque.com/assets/images/ico490x458.webp",size="7",),
                rx.vstack(
                    rx.heading(
                        "FRANK MORENO A.",
                        size=Size_p.DEFAULT.value,
                    ),
                    rx.text(
                        "@fmorenoadmin",
                        size=Size_p.MEDIUM.value,
                    ),
                    rx.hstack(
                        link_icon("https://twitch.tv/fmorenoadmin/"),
                        link_icon("https://www.youtube.com/@fmorenoadmin"),
                        link_icon("https://www.facebook.com/fmorenoadmin/"),
                        link_icon("https://www.instagram.com/fmorenoadmin/"),
                    ),
                    width="100%",
                ),
                align_items="start",
            ),
            rx.flex(
                info_text("PHP", "+7", "Años de Experiencia"),
                rx.spacer(),
                info_text("Python", "+1", "Años de Experiencia"),
                rx.spacer(),
                info_text("MySQL", "+7", "Años de Experiencia"),
                rx.spacer(),
                info_text("PostgreSQL", "+5", "Años de Experiencia"),
                spacing="2",
                width="100%",
            ),
            rx.text("""Soy webMaster \r
                Programador PHP - Semi-Senior, con mas de 7 años de experiencia. \r
                Programador Python - Junior. \n
                Partner de Microsoft. \n
                !Bienvenid@¡"""),
            align_items="start",
            spacing=Size_p.BIG.value,
        ),
    )