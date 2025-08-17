
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
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          <CreditCard card={data.creditCard} />


          <CreditBalanceCard balance={data.creditBalance} />


          <InvoicesCard invoices={data.invoices} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
         
          <div className="lg:col-span-2">
            <PaymentMethodsCard paymentMethods={data.paymentMethods} />
           <div className="mt-">
             <BillingInfoCard billingInfo={data.billingInfo} />
           </div>
          </div>

          <TransactionsCard transactions={data.transactions} />
        </div>

        
      </div>
    </div>
  )
}
