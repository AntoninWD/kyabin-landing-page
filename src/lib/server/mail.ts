import sendgrid from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';

sendgrid.setApiKey(SENDGRID_API_KEY);

interface SendEmailOptions {
	from: string;
	to: string;
	subject: string;
	templateId: string;
	dynamicTemplateData?: {
		[key: string]: string;
	};
}

export const sendEmail = async ({
	from,
	to,
	subject,
	templateId,
	dynamicTemplateData
}: SendEmailOptions) => {
	const options = {
		from,
		to,
		subject,
		templateId,
		dynamicTemplateData
	};

	const result = await sendgrid.send(options);

	return result;
};
