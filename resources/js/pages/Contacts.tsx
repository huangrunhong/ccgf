import { Link } from '@inertiajs/react';
import { RiAddFill, RiEditLine } from '@remixicon/react';

import { Contact, PageProps } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import DeleteLink from '@/components/base/DeleteLink';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

interface ContactsProps extends PageProps {
  contacts: Contact[];
}

const Contacts = ({ contacts }: ContactsProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="contacts">
      <SiteHead title={message.page.contacts} />
      <div className="flex items-center justify-between mb-2">
        <span className="ml-1">{contacts.length} Items</span>
        <Link className="button solid" href={route('contacts.create')}>
          <RiAddFill size={18} />
          {message.page.createContact}
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>{message.admin.contacts.name}</th>
            <th>{message.admin.contacts.tel}</th>
            <th>{message.admin.contacts.email}</th>
            <th>{message.admin.contacts.role}</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.tel}</td>
              <td>{contact.email}</td>
              <td className="flex gap-1 items-center justify-between">
                {contact.role ? message.common.role[contact.role] : '-'}
                <div className="flex gap">
                  <DeleteLink href={route('contacts.destroy', { id: contact.id })} />
                  <Link className="button icon" href={route('contacts.edit', { id: contact.id })}>
                    <RiEditLine size={18} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AuthenticatedLayout>
  );
};

export default Contacts;
