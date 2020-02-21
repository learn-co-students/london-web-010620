# frozen_string_literal: true

class PetsController < ApplicationController
  def index
    pets = Pet.all
    render json: pets, only: %i[id name], include: :species
  end

  def show
    pet = Pet.find(params[:id])
    render json: pet, include: :species
  end

  def create
    pet = Pet.create(pet_params)

    if pet.valid?
      render json: pet, include: :species
    else
      render json: { errors: pet.errors.full_messages }, status: :not_acceptable
    end
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :size, :rare, :species_id, :age)
  end
end
