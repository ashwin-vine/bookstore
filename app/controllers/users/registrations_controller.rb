class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    register_success && return if resource.persisted?

    register_failed(resource)
  end

  def register_success
    render json: {
      message: 'Signed up sucessfully.',
      user: UserSerializer.new(current_user)
    }, status: :ok
  end

  def register_failed(resource)
    render json: { message: resource.errors.full_messages.join(', ') }, status: :unprocessable_entity
  end
end
