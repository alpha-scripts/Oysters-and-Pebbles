<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', phone: '', message: '', carInterest: '' })
const status = ref('idle') // idle | submitting | success | error
const fieldErrors = ref({})

async function handleSubmit() {
  status.value = 'submitting'
  fieldErrors.value = {}

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (res.status === 400) {
      const { errors } = await res.json()
      fieldErrors.value = errors ?? {}
      status.value = 'idle'
      return
    }
    if (!res.ok) throw new Error(`Request failed: ${res.status}`)

    status.value = 'success'
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
    form.carInterest = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
    <p v-if="status === 'success'" class="contact-form-note contact-form-success" role="status">
      Thanks — we've got your message and will be in touch shortly.
    </p>
    <template v-else>
      <div class="contact-form-row">
        <label class="contact-form-field">
          <span>Name</span>
          <input v-model="form.name" type="text" name="name" autocomplete="name" />
          <span v-if="fieldErrors.name" class="contact-form-error">{{ fieldErrors.name }}</span>
        </label>
        <label class="contact-form-field">
          <span>Car of interest (optional)</span>
          <input v-model="form.carInterest" type="text" name="carInterest" placeholder="e.g. Land Cruiser 300" />
        </label>
      </div>

      <div class="contact-form-row">
        <label class="contact-form-field">
          <span>Email</span>
          <input v-model="form.email" type="email" name="email" autocomplete="email" />
          <span v-if="fieldErrors.email" class="contact-form-error">{{ fieldErrors.email }}</span>
        </label>
        <label class="contact-form-field">
          <span>Phone</span>
          <input v-model="form.phone" type="tel" name="phone" autocomplete="tel" />
        </label>
      </div>
      <p v-if="fieldErrors.contact" class="contact-form-error">{{ fieldErrors.contact }}</p>

      <label class="contact-form-field">
        <span>Message</span>
        <textarea v-model="form.message" name="message" rows="4"></textarea>
        <span v-if="fieldErrors.message" class="contact-form-error">{{ fieldErrors.message }}</span>
      </label>

      <p v-if="status === 'error'" class="contact-form-note contact-form-error-note" role="alert">
        Something went wrong sending your message. Please try WhatsApp or email instead.
      </p>

      <button type="submit" class="btn-primary" :disabled="status === 'submitting'">
        {{ status === 'submitting' ? 'Sending…' : 'Send message' }}
      </button>
    </template>
  </form>
</template>

<style scoped>
.contact-form {
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.contact-form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: var(--text-muted);
}

.contact-form-field input,
.contact-form-field textarea {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--text);
  background: var(--surface2);
  border: 1px solid var(--border2);
  border-radius: var(--r-sm);
  padding: 10px 12px;
  resize: vertical;
}

.contact-form-field input:focus,
.contact-form-field textarea:focus {
  outline: none;
  border-color: var(--gold-border);
}

.contact-form-error {
  color: #e08a8a;
  font-size: 12px;
}

.contact-form-note {
  font-size: 14px;
  padding: 14px 16px;
  border-radius: var(--r-sm);
}

.contact-form-success {
  color: var(--green);
  background: rgba(91, 191, 143, 0.1);
  border: 1px solid rgba(91, 191, 143, 0.25);
}

.contact-form-error-note {
  color: #e08a8a;
  background: rgba(224, 138, 138, 0.08);
  border: 1px solid rgba(224, 138, 138, 0.2);
}

.contact-form button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .contact-form-row {
    grid-template-columns: 1fr;
  }
}
</style>
