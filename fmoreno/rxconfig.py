import reflex as rx

config = rx.Config(
    app_name="fmoreno",
    # Connect to your own database.
    db_url="postgresql://postgres:123@localhost:5432/postgres",
    # Change the frontend port.
    frontend_port=3000,
)