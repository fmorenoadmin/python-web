import reflex as rx

#styles
from fmoreno.styles.styles import Size as Size

def navbar() -> rx.Component:
    return rx.hstack(
        rx.text(
            "frmorenoadmin",
        ),
        position="sticky",
        bg="blue",
        padding_x=Size.DEFAULT.value,
        padding_y=Size.MEDIUM.value,
        z_index="999",
        top="0",
    )