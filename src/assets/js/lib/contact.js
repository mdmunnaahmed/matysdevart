(function ($) {
	"use strict";
	$(document).on("submit", "#contact_form", function (e) {
		e.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		if (!name) {
			$("#name").removeClass("error");
			$("#name").addClass("error").attr("placeholder", "Please Enter Name");
		} else {
			$("#name").removeClass("error");
		}
		if (!email) {
			$("#email").removeClass("error");
			$("#email").addClass("error").attr("placeholder", "Please Enter Email");
		} else {
			$("#email").removeClass("error");
		}
		if (!message) {
			$("#message").removeClass("error");
			$("#message").addClass("error").attr("placeholder", "Please Enter Your Message");
		} else {
			$("#message").removeClass("error");
		}
		if (name && email && message) {
			$.ajax({
				type: "POST",
				url: "../../contact.php",
				data: {
					name: name,
					email: email,
					message: message,
				},
				success: function (data) {
					$("#contact_form").children(".email-success").remove();
					$("#contact_form").prepend('<span class="alert alert-success email-success contact-alert">' + data + "</span>");
					$("#name").val("");
					$("#email").val("");
					$("#message").val("");
					$(".email-success").fadeOut(3000);
				},
				error: function (res) {},
			});
		} else {
			$("#contact_form").children(".email-success").remove();
			$("#contact_form").prepend('<span class="alert alert-danger email-success contact-alert">Somenthing went wrong</span>');
			$(".email-success").fadeOut(3000);
		}
	});
})(jQuery);
