import reflex as rx
from enum import Enum

#Constants
MAX_WIDTH = "600px"

#Sizes
class Size(Enum):
    SMALL="0.5em"
    MEDIUM="0.8em"
    DEFAULT="1em"
    BIG="2em"
    
class Size_p(Enum):
    SMALL="1"
    MEDIUM="3"
    DEFAULT="6"
    BIG="9"
    
#Styles
BASE_STYLE = {
    rx.button: {
        "width": "100%",
        "height": "100%",
        "diaplay": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
    },
    rx.link: {
        "text_decortion": "none",
        "_hover": {},
    },
}

title_styles = dict(
    width="100%",
    padding_top=Size.DEFAULT.value,
)

button_title_style = dict(
    font_size=Size.DEFAULT.value,
)

button_body_style = dict(
    font_size=Size.MEDIUM.value,
)