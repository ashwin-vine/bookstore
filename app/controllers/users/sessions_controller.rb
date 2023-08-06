class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(_resource, _opts = {})
    render json: UserSerializer.new(current_user).serializable_hash, status: :ok and return if current_user
  end

  def resond_to_on_destroy
    logout_success and return if current_user

    logout_failure
  end

  def logout_success
    render json: { message: 'Logged out successfully' }, status: :ok
  end

  def logout_failure
    render json: { error: 'Logout failed' }, status: :unprocessable_entity
  end
end
