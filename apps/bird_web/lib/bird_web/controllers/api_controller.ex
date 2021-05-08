defmodule BirdWeb.ApiController do
  use BirdWeb, :controller

  def index(conn, _params) do
    json(conn, %{id: 123})
  end
end
