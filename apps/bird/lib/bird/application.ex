defmodule Bird.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Bird.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Bird.PubSub}
      # Start a worker by calling: Bird.Worker.start_link(arg)
      # {Bird.Worker, arg}
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: Bird.Supervisor)
  end
end
