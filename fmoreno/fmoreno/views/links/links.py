import reflex as rx

#importar compoents
from fmoreno.componets.link_button import link_button
from fmoreno.componets.title import title

def links() -> rx.Component:
    return rx.center(
        rx.vstack(
            title("Comunidad:"),
            link_button("Twitch", "Directos los Sábados y Domingos", "https://twitch.tv/fmorenoadmin/"),
            link_button("Youtube", "Tutoriales Semanales", "https://www.youtube.com/@fmorenoadmin"),
            link_button("Facebook", "Facebook", "https://www.facebook.com/fmorenoadmin/"),
            link_button("Instagam", "Instagram", "https://www.instagram.com/fmorenoadmin/"),
            title("Comunidad:"),
            link_button("Twitch", "Directos los Sábados y Domingos", "https://twitch.tv/fmorenoadmin/"),
            link_button("Youtube", "Tutoriales Semanales", "https://www.youtube.com/@fmorenoadmin"),
            link_button("Facebook", "Facebook", "https://www.facebook.com/fmorenoadmin/"),
            link_button("Instagam", "Instagram", "https://www.instagram.com/fmorenoadmin/"),
            width="100%",
            align_items="start",
        ),
        rx.vstack(
        ),
        width="100%",
        align_items="start",
    )