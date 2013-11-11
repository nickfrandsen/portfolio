class PagesController < ApplicationController

  def index
    
  end
  
  def send_enquiry
    name = params[:name]
    reply_email = params[:email]
    message = params[:message]
    ContactMailer.contact_page_enquiry(name, reply_email, message).deliver
    redirect_to :back
  end

end
