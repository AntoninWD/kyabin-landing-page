import { superValidate } from 'sveltekit-superforms/server';
import { interestSchema } from '$lib/schema';
import { fail, error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import { sendEmail } from '$lib/server/mail.js';

const prisma = new PrismaClient();

export const load = async () => {
	// Server API:
	const form = await superValidate(interestSchema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, interestSchema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const result = await prisma.launch_interest.create({
			data: {
				lodge_name: form.data.lodge_name,
				email: form.data.email
			}
		});

		if (!result) {
			throw error(
				500,
				"Une erreur est survenue lors de l'enregistrement de votre demande. Veuillez réessayer plus tard."
			);
		}

		await sendEmail({
			from: 'antonin@kyabin.com',
			to: form.data.email,
			subject: 'Merci pour votre intérêt envers la Kyabin',
			templateId: 'd-65c919c660164580a501c470cb23acc5',
			dynamicTemplateData: {
				name: form.data.lodge_name
			}
		});

		await sendEmail({
			from: 'antonin@kyabin.com',
			to: 'antonin@kyabin.com',
			subject: "Nouvelle demande d'intérêt",
			templateId: 'd-ad5445ffbc1545cc9e2c10a26196d0dc',
			dynamicTemplateData: {
				name: form.data.lodge_name,
				email: form.data.email
			}
		});

		return { form };
	}
};
