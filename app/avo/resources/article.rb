class Avo::Resources::Article < Avo::BaseResource
  self.includes = []
  # self.search = {
  #   query: -> { query.ransack(id_eq: params[:q], m: "or").result(distinct: false) }
  # }

  def fields
    field :id, as: :id
    field :title, as: :text
    field :body, as: :trix, html: Avo::TRIX_CUSTOM_HTML, components: {
      edit_component: Avo::Fields::ActionText::TrixField::EditComponent
    }
  end
end
