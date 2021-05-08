# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of Mix.Config.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
use Mix.Config

# Configure Mix tasks and generators
config :bird,
  ecto_repos: [Bird.Repo]

config :bird_web,
  ecto_repos: [Bird.Repo],
  generators: [context_app: :bird]

# Configures the endpoint
config :bird_web, BirdWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "l5mM8ShKQdaEUMs5lIcjmPgXBCyEpjATMaPzpOtf+1sagL78jlgU5wXJiBrElcR9",
  render_errors: [view: BirdWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: Bird.PubSub,
  live_view: [signing_salt: "v9TnwZz4"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
