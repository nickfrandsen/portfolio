class ContactMailer < ActionMailer::Base
  default from: "nick.rowe.frandsen@gmail.com"
  
  def contact_page_enquiry(name, reply_email, message)
    @name = name
    @message = message
    @reply_email = reply_email
    mail(:to => "nick.rowe.frandsen@gmail.com", :subject => "Enquiry from portfolio")
  end
  
end
