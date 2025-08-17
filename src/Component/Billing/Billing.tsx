
import { mockDashboardData } from "@/lib/mock-data"
import { CreditCard } from "./credit-card"
import { CreditBalanceCard } from "./credit-balance-card"
import { InvoicesCard } from "./invoices-card"
import { PaymentMethodsCard } from "./payment-methods-card"
import { BillingInfoCard } from "./billing-info-card"
import { TransactionsCard } from "./transactions-card"

export default function Billing() {
  // In a real app, this would come from an API call
  const data = mockDashboardData

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Credit Card */}
          <CreditCard card={data.creditCard} />

          {/* Credit Balance */}
          <CreditBalanceCard balance={data.creditBalance} />

          {/* Invoices */}
          <InvoicesCard invoices={data.invoices} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Payment Methods - spans 2 columns */}
          <div className="lg:col-span-2">
            <PaymentMethodsCard paymentMethods={data.paymentMethods} />
          </div>

          {/* Transactions */}
          <TransactionsCard transactions={data.transactions} />
        </div>

        {/* Billing Information - full width */}
        <BillingInfoCard billingInfo={data.billingInfo} />
      </div>
    </div>
  )
}
