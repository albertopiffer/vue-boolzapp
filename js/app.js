const { createApp } = Vue

createApp({
	data() {
		
        return {
			contacts: [
				{
					name: 'Michele',
					avatar: './img/avatar_1.png',
					visible: true,
					messages: [
						{
							date: '2020/01/10 15:30:55',
							message: 'Hai portato a spasso il cane?',
							status: 'sent'
						},
						{
							date: '2020/01/10 15:50:00',
							message: 'Ricordati di stendere i panni',
							status: 'sent'
						},
						{
							date: '2020/01/10 16:15:22',
							message: 'Tutto fatto!',
							status: 'received'
						}
					],
				},

				{
					name: 'Fabio',
					avatar: './img/avatar_2.png',
					visible: true,
					messages: [
						{
							date: '2020/03/20 16:30:00',
							message: 'Ciao come stai?',
							status: 'sent'
						},
						{
							date: '2020/03/20 16:30:55',
							message: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
						},
						{
							date: '2020/03/20 16:35:00',
							message: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent'
						}
					],
				},

				{
					name: 'Samuele',
					avatar: './img/avatar_3.png',
					visible: true,
					messages: [
						{
							date: '2020/03/28 10:10:40',
							message: 'La Marianna va in campagna',
							status: 'received'
						},
						{
							date: '2020/03/28 10:20:10',
							message: 'Sicuro di non aver sbagliato chat?',
							status: 'sent'
						},
						{
							date: '2020/03/28 16:15:22',
							message: 'Ah scusa!',
							status: 'received'
						}
					],
				},

				{
					name: 'Alessandro B.',
					avatar: './img/avatar_4.png',
					visible: true,
					messages: [
						{
							date: '2020/01/10 15:30:55',
							message: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent'
						},
						{
							date: '2020/01/10 15:50:00',
							message: 'Si, ma preferirei andare al cinema',
							status: 'received'
						}
					],
				},

				{
					name: 'Alessandro L.',
					avatar: './img/avatar_5.png',
					visible: true,
					messages: [
						{
							date: '2020/01/10 15:30:55',
							message: 'Ricordati di chiamare la nonna',
							status: 'sent'
						},
						{
							date: '2020/01/10 15:50:00',
							message: 'Va bene, stasera la sento',
							status: 'received'
						}
					],
				},

				{
					name: 'Claudia',
					avatar: './img/avatar_6.png',
					visible: true,
					messages: [
						{
							date: '2020/01/10 15:30:55',
							message: 'Ciao Claudia, hai novità?',
							status: 'sent'
						},
						{
							date: '2020/01/10 15:50:00',
							message: 'Non ancora',
							status: 'received'
						},
						{
							date: '2020/01/10 15:51:00',
							message: 'Nessuna nuova, buona nuova',
							status: 'sent'
						}
					],
				},

				{
					name: 'Federico',
					avatar: './img/avatar_7.png',
					visible: true,
					messages: [
						{
							date: '2020/01/10 15:30:55',
							message: 'Fai gli auguri a Martina che è il suo compleanno!',
							status: 'sent'
						},
						{
							date: '2020/01/10 15:50:00',
							message: 'Grazie per avermelo ricordato, le scrivo subito!',
							status: 'received'
						}
					],
				},

				{
					name: 'Davide',
					avatar: './img/avatar_8.png',
					visible: true,
					messages: [
						{
							date: '2020/01/10 15:30:55',
							message: 'Ciao, andiamo a mangiare la pizza stasera?',
							status: 'received'
						},
						{
							date: '2020/01/10 15:50:00',
							message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
							status: 'sent'
						},
						{
							date: '2020/01/10 15:51:00',
							message: 'OK!!',
							status: 'received'
						}
					],
				},
			],
            
			selectedContactName: 'Michele',
			inputValue: '',
			inputSearch: '',
		}

	},

	computed: {
		
		selectedContact() {
			return this.contacts.find(contact => contact.name === this.selectedContactName)
		},

		formattedHour() {
			return function(date) {
				const dateObject = new Date(date);
				const hour = dateObject.getHours();
				const minute = dateObject.getMinutes();
				return `${hour}:${minute}`;
			}
		},

	},

	methods: {
		
		selectContact(name) {
			this.selectedContactName = name
		},

		addMessage() {
			const ContactId = this.contacts.find(contact => contact.name === this.selectedContactName);

			const trimmedMessage = this.inputValue.trim();
    		if (!trimmedMessage) {
        		return; // don't send an empty message
    		}
			
			const newMessage = {
                date: this.getCurrentDateTime(),
				message: this.inputValue,
				status: 'sent'
            };

			ContactId.messages.push(newMessage);
			this.inputValue = '';

			setTimeout(() => {
				this.reply(ContactId);
			}, 1000);
		},

		reply(ContactId) {
			const newMessage = {
                date: this.getCurrentDateTime(),
				message: 'ok',
				status: 'received'
            };
			ContactId.messages.push(newMessage);
		},

		getCurrentDateTime() {
			const currentDate = new Date();
			const year = currentDate.getFullYear();
			const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
			const day = ('0' + currentDate.getDate()).slice(-2);
			const hours = ('0' + currentDate.getHours()).slice(-2);
			const minutes = ('0' + currentDate.getMinutes()).slice(-2);
			const seconds = ('0' + currentDate.getSeconds()).slice(-2);
			const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			return dateTimeString;
		},

	},
	
}).mount('#app')
