# frozen_string_literal: true

class SpeciesController < ApplicationController
  def show
    species = Species.find(params[:id])

    render json: species, include: :pets
  end
end
