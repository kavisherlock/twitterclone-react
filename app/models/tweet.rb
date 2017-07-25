class Tweet < ApplicationRecord
  belongs_to :user

  def as_json(options={})
    super(methods: [:name])
  end

  def name
    user.display_name
  end

  def gravaltar
    # create the md5 hash
    hash = Digest::MD5.hexdigest(user.email)
    "https://www.gravatar.com/avatar/#{hash}"
  end
end
