# Purpose: To handle the registration of a new user
class Users::RegistrationController < Devise::RegistrationsController
  respond_to :json

  private

  def repsond_with(resource, _opts = {})
    register_success && return if resource.persisted?

    register_failure
  end

  def register_success
    render json: UserSerializer.new(current_user).serializable_hash, status: :ok
  end

  def register_failure
    render json: { error: 'Failed to create user' }, status: :unprocessable_entity
  end
end
